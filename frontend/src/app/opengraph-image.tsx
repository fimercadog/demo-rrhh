import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(160deg, #f7f5ed 0%, #dfe6fb 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "#1644d8",
            color: "#ffffff",
            fontSize: 52,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          D
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#171717" }}>
          DFC Talento Humano
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 32, color: "#5f4f56", maxWidth: 820 }}>
          Software de Recursos Humanos para empresas: empleados, asistencia, vacaciones y mas.
        </div>
      </div>
    ),
    size,
  );
}
