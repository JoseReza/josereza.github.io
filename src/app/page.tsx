import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import TrajectorySection from "@/components/sections/TrajectorySection";
import KnowledgeSection from "@/components/sections/KnowledgeSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          padding: 20,
          boxShadow: "0 4px 8px var(--shadow)",
          fontSize: "1.2rem",
          textAlign: "center"
        }}>
          <h1>José Soto</h1>
          <div style={{ display: "flex", justifyContent: "center", margin: "16px 0 24px" }}>
            <Image
              src="/images/0.jpg"
              alt="Foto de presentación de José Soto"
              width={160}
              height={160}
              priority
              style={{
                borderRadius: "25%",
                objectFit: "cover",
                border: "2px solid var(--card-border)",
              }}
            />
          </div>
          <div>
            <p>Ingeniero desarrollador de sistemas y automatización</p>
          </div>
          <br />
          
        </div>
          <AboutSection />
        <ContactSection />
        <CertificationsSection />
        <ProjectsSection />
        <TrajectorySection />
        <KnowledgeSection />
      </main>

    </div>
  );
}
