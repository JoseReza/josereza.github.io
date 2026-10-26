#!/usr/bin/env python3
"""Generate ES/EN curriculum PDFs (improved layout)."""

from __future__ import annotations

import io
from pathlib import Path

from PIL import Image, ImageDraw
from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas as pdfcanvas
from reportlab.platypus import (
    Flowable,
    Frame,
    KeepTogether,
    PageTemplate,
    BaseDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
)

ROOT = Path(__file__).resolve().parent
PORTFOLIO_PASSWORD = "borboleta.123"
PHOTO_PATH = ROOT / "images" / "0.jpg"
PHOTO_SIZE_PX = 360
GALLERY_SPECS = [
    # path relative to images/, caption keys live in CONTENT
    ("1.jpg", "g1"),
    ("2.jpg", "g2"),
    ("3.jpg", "g3"),
    ("4.jpg", "g4"),
]
# Per-thumb focus: zoom >1 tightens crop; cx/cy are relative centers (0–1)
GALLERY_FOCUS = {
    "g2": {"zoom": 1.38, "cx": 0.42, "cy": 0.30},  # PLC NODE — both people + thumbs up
}


def _to_reader(im: Image.Image) -> ImageReader:
    buf = io.BytesIO()
    im.save(buf, format="PNG", optimize=True)
    buf.seek(0)
    return ImageReader(buf)


def make_circular_photo(src: Path) -> ImageReader:
    """Crop a centered portrait square and mask it to a circle with teal ring."""
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    side = min(w, h)
    left = (w - side) // 2
    top = max(0, (h - side) // 2 - int(side * 0.08))
    if top + side > h:
        top = h - side
    im = im.crop((left, top, left + side, top + side)).resize(
        (PHOTO_SIZE_PX, PHOTO_SIZE_PX), Image.Resampling.LANCZOS
    )

    mask = Image.new("L", (PHOTO_SIZE_PX, PHOTO_SIZE_PX), 0)
    draw = ImageDraw.Draw(mask)
    inset = 5
    draw.ellipse((inset, inset, PHOTO_SIZE_PX - inset - 1, PHOTO_SIZE_PX - inset - 1), fill=255)

    out = Image.new("RGBA", (PHOTO_SIZE_PX, PHOTO_SIZE_PX), (15, 39, 68, 255))
    out.paste(im, (0, 0), mask)
    ring = ImageDraw.Draw(out)
    ring.ellipse(
        (2, 2, PHOTO_SIZE_PX - 3, PHOTO_SIZE_PX - 3),
        outline=(45, 212, 191, 255),
        width=4,
    )
    return _to_reader(out)


def make_gallery_thumb(
    src: Path,
    width_px: int = 320,
    height_px: int = 200,
    *,
    zoom: float = 1.0,
    cx: float = 0.5,
    cy: float = 0.38,
) -> ImageReader:
    """Soft landscape crop with light rounded corners for discreet gallery."""
    im = Image.open(src).convert("RGB")
    w, h = im.size
    target_ratio = width_px / height_px

    # Start from a landscape window, then optionally zoom toward (cx, cy)
    if w / h > target_ratio:
        crop_h = h
        crop_w = int(h * target_ratio)
    else:
        crop_w = w
        crop_h = int(w / target_ratio)

    zoom = max(1.0, zoom)
    crop_w = max(1, int(crop_w / zoom))
    crop_h = max(1, int(crop_h / zoom))

    left = int(w * cx - crop_w / 2)
    top = int(h * cy - crop_h / 2)
    left = max(0, min(left, w - crop_w))
    top = max(0, min(top, h - crop_h))
    im = im.crop((left, top, left + crop_w, top + crop_h))
    im = im.resize((width_px, height_px), Image.Resampling.LANCZOS)

    # Slight soft look for discreet presence
    faded = Image.blend(im, Image.new("RGB", im.size, (241, 245, 249)), 0.08)

    rgba = faded.convert("RGBA")
    mask = Image.new("L", (width_px, height_px), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, width_px - 1, height_px - 1), radius=14, fill=255)
    out = Image.new("RGBA", (width_px, height_px), (250, 251, 252, 0))
    out.paste(rgba, (0, 0), mask)
    return _to_reader(out)


class ThumbImage(Flowable):
    """Reliable image flowable using canvas.drawImage + ImageReader."""

    def __init__(self, reader: ImageReader, width: float, height: float):
        super().__init__()
        self.reader = reader
        self.imageWidth = width
        self.imageHeight = height
        self.width = width
        self.height = height

    def wrap(self, availWidth, availHeight):
        return self.width, self.height

    def draw(self):
        self.canv.drawImage(
            self.reader,
            0,
            0,
            width=self.width,
            height=self.height,
            mask="auto",
            preserveAspectRatio=True,
            anchor="c",
        )


PHOTO = make_circular_photo(PHOTO_PATH) if PHOTO_PATH.exists() else None
GALLERY_THUMBS = {
    key: make_gallery_thumb(ROOT / "images" / fname, **GALLERY_FOCUS.get(key, {}))
    for fname, key in GALLERY_SPECS
    if (ROOT / "images" / fname).exists()
}

SIDEBAR_BG = HexColor("#0F2744")
SIDEBAR_ACCENT = HexColor("#2DD4BF")
SIDEBAR_MUTED = HexColor("#94A3B8")
SIDEBAR_TEXT = HexColor("#E2E8F0")
MAIN_BG = HexColor("#FAFBFC")
INK = HexColor("#0F172A")
MUTED = HexColor("#475569")
RULE = HexColor("#CBD5E1")
CHIP_BG = HexColor("#E0F2F1")
CHIP_FG = HexColor("#0F766E")

PAGE_W, PAGE_H = letter
SIDEBAR_W = 68 * mm
MARGIN = 11 * mm


CONTENT = {
    "es": {
        "name_lines": ["José Rosendo", "Soto Reza"],
        "headline": "Ingeniero Mecatrónico · Software · Linux & Cloud Jr.",
        "summary": (
            "Ingeniero mecatrónico con experiencia práctica en desarrollo fullstack, "
            "administración de entornos Linux y despliegue de servicios en infraestructura "
            "propia (Nginx, Docker, DDNS). Combino JS/TS, Python, Bash, contenedores y "
            "redes/telecom (TCP/IP, HTTP, sockets) para roles de <b>Cloud Jr.</b>, "
            "<b>Administrador Linux</b> y <b>Jr. Software Engineer</b>."
        ),
        "target": "Objetivo: Cloud Jr. (K8s/OpenStack/Telecom) · Linux Admin · Jr. Software Engineer",
        "contact_h": "CONTACTO",
        "contact": [
            "+52 656 574 1161",
            "Josesotoreza@gmail.com",
            "josereza.github.io",
            f"Contraseña portafolio: {PORTFOLIO_PASSWORD}",
            "Cd. Juárez · Remoto",
        ],
        "lang_h": "IDIOMAS",
        "langs": [
            "Español — Nativo",
            "Inglés — Intermedio",
            "Lectura/Escritura 90%",
            "Escucha/Habla 70%",
        ],
        "skills_h": "STACK CLAVE",
        "skills_groups": [
            ("Linux & Infra", "Ubuntu · RHEL · Raspbian · Orange Pi OS · Bash · SSH · systemd · Nginx · DDNS / self-hosting"),
            ("Docker", "Imágenes y contenedores · Dockerfile · Docker Compose · redes/volúmenes · multi-servicio · ambientes de desarrollo y producción"),
            ("Cloud / DevOps", "Nginx (reverse proxy, estáticos) · Jenkins · CI/CD · Contenedores · Despliegue web"),
            ("Software", "JS/TS · Node.js · React · Vue · Angular · Express · Python · Flask · Java / Spring Boot"),
            ("Redes & Telecom", "TCP/IP · HTTP/REST · Sockets · JSON · Serial · IoT / IIoT · Monitoreo hardware"),
            ("Embebidos", "ESP32 · Arduino · Raspberry Pi · C++ / PlatformIO · PLC Allen-Bradley · Siemens S7"),
        ],
        "exp_h": "EXPERIENCIA",
        "experience": [
            {
                "title": "Técnico en sistemas / Desarrollador",
                "org": "Robert Bosch",
                "dates": "Ago 2024 — Ago 2025",
                "bullets": [
                    "Desarrollo y despliegue de aplicaciones web en producción industrial.",
                    "Ambientes de desarrollo con Docker (Compose, redes, volúmenes) y entrega continua (Jenkins).",
                    "Soluciones de software y conectividad con equipos multidisciplinarios.",
                ],
            },
            {
                "title": "Técnico desarrollador de aplicaciones",
                "org": "Fletes México",
                "dates": "Jun 2022 — Dic 2023",
                "bullets": [
                    "Apps web multiplataforma para operación logística.",
                    "Migración legacy → arquitectura web moderna (APIs, frontend, backend).",
                    "Automatización y scripting en Linux para soporte y despliegue.",
                ],
            },
        ],
        "edu_h": "FORMACIÓN",
        "education": [
            {
                "title": "Ingeniería Mecatrónica",
                "org": "TecNM — Campus Cd. Juárez",
                "dates": "2018 — 2022",
                "note": "Electrónica, mecánica, control y programación.",
            },
            {
                "title": "Técnico en Electrónica",
                "org": "CBTis No. 128",
                "dates": "2015 — 2018",
                "note": "Fundamentos de electrónica y sistemas.",
            },
        ],
        "proj_h": "PROYECTOS DESTACADOS",
        "proj_tag": "Self-host Linux · Nginx · Docker · Web fullstack · DDNS",
        "projects": [
            {
                "title": "Levantado Event List",
                "link": "https://levantado.ddns.net/levantado-event-list",
                "blurb": (
                    "App web self-hosted en Linux (DDNS + Nginx): 1,194 eventos, auth, filtros, "
                    "mapa y UI interactiva. Host, proxy inverso y exposición remota."
                ),
                "tags": ["Linux", "Nginx", "Docker", "Web", "DDNS"],
            },
            {
                "title": "Levantado Beats",
                "link": "https://levantado.ddns.net/levantado-beats",
                "blurb": (
                    "Biblioteca audio/MIDI en Linux/Nginx: búsqueda, metadatos, CID y entrega de archivos."
                ),
                "tags": ["Linux", "Nginx", "Media", "Ops"],
            },
            {
                "title": "Tire System — Migración Web",
                "link": "https://josereza.github.io/projects/sistema-llantas/",
                "blurb": "Migración MS-DOS → arquitectura web moderna (backend, frontend, APIs).",
                "tags": ["Fullstack", "Migración", "APIs"],
            },
            {
                "title": "IoT Soldadora + Investigación IIoT",
                "link": "https://josereza.github.io/projects/conectividad-maquina-soldadora/",
                "blurb": "IoT a soldadora por puntos (control web, M2M) e investigación IIoT industrial.",
                "tags": ["IoT", "Telecom", "IIoT", "Web"],
            },
        ],
        "gallery_h": "PRESENTACIONES DE PROYECTOS",
        "gallery_intro": (
            "Participación en expos y nodos de innovación (NCIE / Technology HUB): demos de "
            "visión por computadora, prototipado 3D, PLC NODE (hardware + web/cloud) y vínculo con industria."
        ),
        "gallery": {
            "g1": "NCIE — visión por computadora, dashboards y prototipado 3D",
            "g2": "PLC NODE — control industrial con interfaz web/cloud",
            "g3": "Technology HUB — colaboración y networking tech",
            "g4": "Expo industrial — prototipos, logística e innovación",
        },
        "fit_h": "AFINIDAD CON VACANTES OBJETIVO",
        "fit": (
            "<b>Cloud Jr. (K8s / OpenStack / Telecom):</b> Linux, Docker (Compose, redes, volúmenes), "
            "Nginx, TCP/IP y telecom/IoT; servicios self-hosted listos para orquestación.<br/>"
            "<b>Administrador Linux (ambientes de desarrollo):</b> Ubuntu/RHEL, Bash, Nginx, Docker, "
            "Jenkins, hosts y despliegue web remoto en producción.<br/>"
            "<b>Jr. Software Engineer:</b> fullstack (JS/TS, React, Node, Python), REST y entrega "
            "de producto de punta a punta."
        ),
        "footer": f"Portafolio: https://josereza.github.io/  ·  Contraseña: {PORTFOLIO_PASSWORD}",
    },
    "en": {
        "name_lines": ["José Rosendo", "Soto Reza"],
        "headline": "Mechatronic Engineer · Software · Linux & Cloud Jr.",
        "summary": (
            "Mechatronic engineer with hands-on fullstack development, Linux environment "
            "administration, and self-hosted service deployment (Nginx, Docker, DDNS). I combine "
            "JS/TS, Python, Bash, containers, and networking/telecom (TCP/IP, HTTP, sockets) for "
            "<b>Junior Cloud</b>, <b>Linux Administrator</b>, and <b>Jr. Software Engineer</b> roles."
        ),
        "target": "Target: Junior Cloud (K8s/OpenStack/Telecom) · Linux Admin · Jr. Software Engineer",
        "contact_h": "CONTACT",
        "contact": [
            "+52 656 574 1161",
            "Josesotoreza@gmail.com",
            "josereza.github.io",
            f"Portfolio password: {PORTFOLIO_PASSWORD}",
            "Cd. Juárez · Remote",
        ],
        "lang_h": "LANGUAGES",
        "langs": [
            "Spanish — Native",
            "English — Intermediate",
            "Reading/Writing 90%",
            "Listening/Speaking 70%",
        ],
        "skills_h": "CORE STACK",
        "skills_groups": [
            ("Linux & Infra", "Ubuntu · RHEL · Raspbian · Orange Pi OS · Bash · SSH · systemd · Nginx · DDNS / self-hosting"),
            ("Docker", "Images & containers · Dockerfile · Docker Compose · networks/volumes · multi-service stacks · dev and production environments"),
            ("Cloud / DevOps", "Nginx (reverse proxy, statics) · Jenkins · CI/CD · Containers · Web deployment"),
            ("Software", "JS/TS · Node.js · React · Vue · Angular · Express · Python · Flask · Java / Spring Boot"),
            ("Networks & Telecom", "TCP/IP · HTTP/REST · Sockets · JSON · Serial · IoT / IIoT · Hardware monitoring"),
            ("Embedded", "ESP32 · Arduino · Raspberry Pi · C++ / PlatformIO · Allen-Bradley PLC · Siemens S7"),
        ],
        "exp_h": "EXPERIENCE",
        "experience": [
            {
                "title": "Systems Technician / Developer",
                "org": "Robert Bosch",
                "dates": "Aug 2024 — Aug 2025",
                "bullets": [
                    "Built and deployed web apps in industrial production environments.",
                    "Dev environments with Docker (Compose, networks, volumes) and continuous delivery (Jenkins).",
                    "Software and connectivity solutions with cross-functional teams.",
                ],
            },
            {
                "title": "Application Developer Technician",
                "org": "Fletes México",
                "dates": "Jun 2022 — Dec 2023",
                "bullets": [
                    "Multiplatform web apps for logistics operations.",
                    "Legacy migration to modern web architecture (APIs, frontend, backend).",
                    "Linux automation and scripting for support and deployment.",
                ],
            },
        ],
        "edu_h": "EDUCATION",
        "education": [
            {
                "title": "Mechatronics Engineering",
                "org": "TecNM — Cd. Juárez Campus",
                "dates": "2018 — 2022",
                "note": "Electronics, mechanics, control, and programming.",
            },
            {
                "title": "Electronics Technician",
                "org": "CBTis No. 128",
                "dates": "2015 — 2018",
                "note": "Foundations in electronics and systems.",
            },
        ],
        "proj_h": "FEATURED PROJECTS",
        "proj_tag": "Self-hosted Linux · Nginx · Docker · Fullstack web · DDNS",
        "projects": [
            {
                "title": "Levantado Event List",
                "link": "https://levantado.ddns.net/levantado-event-list",
                "blurb": (
                    "Self-hosted Linux web app (DDNS + Nginx): 1,194 events, auth, filters, map, "
                    "and interactive UI — host admin, reverse proxy, remote exposure."
                ),
                "tags": ["Linux", "Nginx", "Docker", "Web", "DDNS"],
            },
            {
                "title": "Levantado Beats",
                "link": "https://levantado.ddns.net/levantado-beats",
                "blurb": (
                    "Audio/MIDI library on Linux/Nginx: search, metadata, CID references, and file delivery."
                ),
                "tags": ["Linux", "Nginx", "Media", "Ops"],
            },
            {
                "title": "Tire System — Web Migration",
                "link": "https://josereza.github.io/projects/sistema-llantas/",
                "blurb": "MS-DOS to modern web architecture migration (backend, frontend, APIs).",
                "tags": ["Fullstack", "Migration", "APIs"],
            },
            {
                "title": "IoT Welder + IIoT Research",
                "link": "https://josereza.github.io/projects/conectividad-maquina-soldadora/",
                "blurb": "IoT spot-welder connectivity (web control, M2M) plus industrial IIoT research.",
                "tags": ["IoT", "Telecom", "IIoT", "Web"],
            },
        ],
        "gallery_h": "PROJECT PRESENTATIONS",
        "gallery_intro": (
            "Innovation expos and hubs (NCIE / Technology HUB): computer-vision demos, 3D prototyping, "
            "PLC NODE (hardware + web/cloud), and industry engagement."
        ),
        "gallery": {
            "g1": "NCIE — computer vision, dashboards & 3D prototyping",
            "g2": "PLC NODE — industrial control with web/cloud UI",
            "g3": "Technology HUB — collaboration & tech networking",
            "g4": "Industry expo — prototypes, logistics & innovation",
        },
        "fit_h": "FIT FOR TARGET ROLES",
        "fit": (
            "<b>Junior Cloud (K8s / OpenStack / Telecom):</b> Linux, Docker (Compose, networks, volumes), "
            "Nginx, TCP/IP and telecom/IoT; self-hosted services ready for orchestration.<br/>"
            "<b>Linux Administrator (dev environments):</b> Ubuntu/RHEL, Bash, Nginx, Docker, Jenkins, "
            "host setup, and remote production web deployment.<br/>"
            "<b>Jr. Software Engineer:</b> fullstack (JS/TS, React, Node, Python), REST APIs, "
            "and end-to-end product delivery."
        ),
        "footer": f"Portfolio: https://josereza.github.io/  ·  Password: {PORTFOLIO_PASSWORD}",
    },
}


def wrap_text(c: pdfcanvas.Canvas, text: str, x: float, y: float, max_w: float, font="Helvetica", size=7.2, leading=9.2, color=SIDEBAR_MUTED):
    """Simple word-wrap drawer; returns new y."""
    c.setFont(font, size)
    c.setFillColor(color)
    words = text.split()
    line = ""
    for w in words:
        trial = (line + " " + w).strip()
        if c.stringWidth(trial, font, size) <= max_w:
            line = trial
        else:
            c.drawString(x, y, line)
            y -= leading
            line = w
    if line:
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_sidebar(c: pdfcanvas.Canvas, lang: str):
    data = CONTENT[lang]
    c.setFillColor(SIDEBAR_BG)
    c.rect(0, 0, SIDEBAR_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(SIDEBAR_ACCENT)
    c.rect(SIDEBAR_W - 2.5, 0, 2.5, PAGE_H, fill=1, stroke=0)

    x = 8 * mm
    y = PAGE_H - 10 * mm
    max_w = SIDEBAR_W - 14 * mm

    if PHOTO is not None:
        photo_d = 28 * mm
        photo_x = (SIDEBAR_W - photo_d) / 2
        c.drawImage(
            PHOTO,
            photo_x,
            y - photo_d,
            width=photo_d,
            height=photo_d,
            mask="auto",
            preserveAspectRatio=True,
        )
        y -= photo_d + 5 * mm

    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 11.5)
    for line in data["name_lines"]:
        c.drawString(x, y, line)
        y -= 13

    y -= 1
    y = wrap_text(c, data["headline"], x, y, max_w, "Helvetica", 6.9, 8.8, SIDEBAR_ACCENT)
    y -= 3
    c.setStrokeColor(SIDEBAR_ACCENT)
    c.setLineWidth(0.7)
    c.line(x, y, x + max_w, y)
    y -= 9

    def section(title):
        nonlocal y
        y -= 2
        c.setFillColor(SIDEBAR_ACCENT)
        c.setFont("Helvetica-Bold", 7.2)
        c.drawString(x, y, title)
        y -= 9

    section(data["contact_h"])
    for line in data["contact"]:
        y = wrap_text(c, line, x, y, max_w, "Helvetica", 6.8, 8.8, SIDEBAR_TEXT)
    y -= 1

    section(data["lang_h"])
    for line in data["langs"]:
        y = wrap_text(c, line, x, y, max_w, "Helvetica", 6.8, 8.8, SIDEBAR_TEXT)
    y -= 1

    section(data["skills_h"])
    for title, body in data["skills_groups"]:
        c.setFillColor(SIDEBAR_TEXT)
        c.setFont("Helvetica-Bold", 6.7)
        c.drawString(x, y, title)
        y -= 8
        y = wrap_text(c, body, x, y, max_w, "Helvetica", 6.1, 7.7, SIDEBAR_MUTED)
        y -= 2


def styles_bundle():
    base = getSampleStyleSheet()

    def S(name, **kw):
        return ParagraphStyle(name, parent=base["Normal"], **kw)

    return {
        "section_tag": S("section_tag", fontName="Helvetica-Bold", fontSize=7, leading=9, textColor=HexColor("#0F766E"), spaceAfter=2),
        "h1": S("h1", fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=INK, spaceBefore=1, spaceAfter=2),
        "body": S("body", fontName="Helvetica", fontSize=7.8, leading=10.2, textColor=MUTED, alignment=TA_JUSTIFY, spaceAfter=3),
        "job_title": S("job_title", fontName="Helvetica-Bold", fontSize=8.5, leading=10.5, textColor=INK, spaceAfter=0),
        "job_meta": S("job_meta", fontName="Helvetica-Oblique", fontSize=7.2, leading=9.2, textColor=HexColor("#0F766E"), spaceAfter=1.5),
        "bullet": S("bullet", fontName="Helvetica", fontSize=7.4, leading=9.8, textColor=MUTED, leftIndent=7, spaceAfter=1),
        "proj_title": S("proj_title", fontName="Helvetica-Bold", fontSize=8.0, leading=9.8, textColor=INK, spaceAfter=0),
        "proj_link": S("proj_link", fontName="Helvetica", fontSize=6.4, leading=8.2, textColor=HexColor("#0D9488"), spaceAfter=1),
        "chip": S("chip", fontName="Helvetica-Bold", fontSize=6.2, leading=7.8, textColor=CHIP_FG, alignment=TA_LEFT),
        "caption": S(
            "caption",
            fontName="Helvetica",
            fontSize=5.8,
            leading=7.2,
            textColor=MUTED,
            alignment=TA_LEFT,
            spaceBefore=1,
        ),
    }


def chips_row(tags, styles, width):
    cells = [Paragraph(t, styles["chip"]) for t in tags]
    col_w = width / len(tags)
    t = Table([cells], colWidths=[col_w] * len(tags))
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), CHIP_BG),
                ("INNERGRID", (0, 0), (-1, -1), 2.5, MAIN_BG),
                ("LEFTPADDING", (0, 0), (-1, -1), 3),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3),
                ("TOPPADDING", (0, 0), (-1, -1), 1.5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ]
        )
    )
    return t


def build_main(lang: str):
    c = CONTENT[lang]
    s = styles_bundle()
    story = []
    story.append(Paragraph(c["target"], s["section_tag"]))
    story.append(Paragraph(c["summary"], s["body"]))

    story.append(Paragraph(c["fit_h"], s["h1"]))
    story.append(HRFlowable(width="100%", thickness=0.55, color=RULE, spaceBefore=0, spaceAfter=2))
    story.append(Paragraph(c["fit"], s["body"]))

    story.append(Paragraph(c["exp_h"], s["h1"]))
    story.append(HRFlowable(width="100%", thickness=0.55, color=RULE, spaceBefore=0, spaceAfter=2))
    for job in c["experience"]:
        block = [
            Paragraph(job["title"], s["job_title"]),
            Paragraph(f"{job['org']}  ·  {job['dates']}", s["job_meta"]),
        ]
        for b in job["bullets"]:
            block.append(Paragraph(f"• {b}", s["bullet"]))
        block.append(Spacer(1, 1.6 * mm))
        story.append(KeepTogether(block))

    story.append(Paragraph(c["edu_h"], s["h1"]))
    story.append(HRFlowable(width="100%", thickness=0.55, color=RULE, spaceBefore=0, spaceAfter=2))
    for edu in c["education"]:
        story.append(Paragraph(f"{edu['title']}  ·  {edu['dates']}", s["job_title"]))
        story.append(Paragraph(f"{edu['org']} — {edu['note']}", s["body"]))

    story.append(Paragraph(c["proj_h"], s["h1"]))
    story.append(HRFlowable(width="100%", thickness=0.55, color=RULE, spaceBefore=0, spaceAfter=1))
    story.append(Paragraph(c["proj_tag"], s["section_tag"]))

    main_w = PAGE_W - SIDEBAR_W - MARGIN * 1.6
    for p in c["projects"]:
        block = [
            Paragraph(p["title"], s["proj_title"]),
            Paragraph(f'<link href="{p["link"]}">{p["link"]}</link>', s["proj_link"]),
            Paragraph(p["blurb"], s["body"]),
            chips_row(p["tags"], s, main_w),
            Spacer(1, 1.4 * mm),
        ]
        story.append(KeepTogether(block))

    # Discreet presentation gallery (1–4.jpg)
    story.append(Spacer(1, 1 * mm))
    story.append(Paragraph(c["gallery_h"], s["h1"]))
    story.append(HRFlowable(width="100%", thickness=0.55, color=RULE, spaceBefore=0, spaceAfter=2))
    story.append(Paragraph(c["gallery_intro"], s["body"]))

    gap = 2.2 * mm
    keys = [key for _, key in GALLERY_SPECS if key in GALLERY_THUMBS]
    if keys:
        thumb_w = (main_w - (len(keys) - 1) * gap) / len(keys)
        thumb_h = thumb_w * 0.62
        col_ws = [thumb_w] * len(keys)
        img_row = [ThumbImage(GALLERY_THUMBS[k], thumb_w, thumb_h) for k in keys]
        cap_row = [Paragraph(c["gallery"][k], s["caption"]) for k in keys]
        gallery = Table([img_row, cap_row], colWidths=col_ws)
        gallery.setStyle(
            TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -2), gap),
                    ("RIGHTPADDING", (-1, 0), (-1, -1), 0),
                    ("TOPPADDING", (0, 0), (-1, 0), 0),
                    ("BOTTOMPADDING", (0, 0), (-1, 0), 1.2),
                    ("TOPPADDING", (0, 1), (-1, 1), 0),
                    ("BOTTOMPADDING", (0, 1), (-1, 1), 0),
                ]
            )
        )
        story.append(gallery)
    return story


class CurriculumDoc(BaseDocTemplate):
    def __init__(self, filename, lang: str, **kw):
        super().__init__(filename, **kw)
        self.lang = lang

        def on_page(canv, doc):
            canv.saveState()
            canv.setFillColor(MAIN_BG)
            canv.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
            draw_sidebar(canv, doc.lang)
            canv.setFillColor(MUTED)
            canv.setFont("Helvetica", 6.3)
            canv.drawString(SIDEBAR_W + MARGIN * 0.7, 7 * mm, CONTENT[doc.lang]["footer"])
            canv.drawRightString(PAGE_W - MARGIN, 7 * mm, str(doc.page))
            canv.restoreState()

        frame = Frame(
            SIDEBAR_W + MARGIN * 0.65,
            MARGIN + 3 * mm,
            PAGE_W - SIDEBAR_W - MARGIN * 1.5,
            PAGE_H - MARGIN * 2 - 3 * mm,
            id="main",
            showBoundary=0,
        )
        self.addPageTemplates([PageTemplate(id="Main", frames=[frame], onPage=on_page)])


def generate(lang: str, out_name: str):
    out = ROOT / out_name
    doc = CurriculumDoc(
        str(out),
        lang=lang,
        pagesize=letter,
        title="Curriculum — José Rosendo Soto Reza",
        author="José Rosendo Soto Reza",
    )
    doc.build(build_main(lang))
    print(f"Wrote {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    generate("es", "curriculum_ES.pdf")
    generate("en", "curriculum_EN.pdf")
