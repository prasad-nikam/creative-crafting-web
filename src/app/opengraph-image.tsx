import { ImageResponse } from "next/og";

export const alt = "Creative Crafting — Digital Growth & Technology Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b0b0e", color: "white", padding: "66px 76px", fontFamily: "Arial, sans-serif", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -90, top: -170, width: 520, height: 900, transform: "rotate(24deg)", background: "#e3131b", opacity: 0.95 }} />
        <div style={{ position: "absolute", right: 75, top: -180, width: 320, height: 900, transform: "rotate(24deg)", background: "#17171b" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16, zIndex: 1 }}>
          <div style={{ width: 54, height: 54, border: "6px solid #e3131b", borderRightColor: "white", borderRadius: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 38, fontWeight: 900 }}>C</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 22, fontWeight: 800, lineHeight: 1.1 }}>CREATIVE CRAFTING<span style={{ fontSize: 11, letterSpacing: 3, fontWeight: 500, marginTop: 5 }}>MEDIA &amp; CONSULTING</span></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1, maxWidth: 850 }}>
          <div style={{ fontSize: 20, letterSpacing: 5, color: "#c6c6ca", marginBottom: 24 }}>DIGITAL GROWTH &amp; TECHNOLOGY STUDIO</div>
          <div style={{ fontSize: 100, lineHeight: 0.9, letterSpacing: -3, fontWeight: 900 }}>IDEAS INTO</div>
          <div style={{ fontSize: 110, lineHeight: 0.95, letterSpacing: -3, fontWeight: 900, color: "#e3131b" }}>INFLUENCE.</div>
          <div style={{ fontSize: 27, color: "#dedee2", marginTop: 25 }}>Media. Strategy. Technology. For a stronger tomorrow.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1, borderTop: "1px solid #ffffff45", paddingTop: 20, fontSize: 16, letterSpacing: 2, color: "#d0d0d4" }}><span>POLITICAL &amp; CORPORATE CLIENTS</span><span>CREATIVE CRAFTING</span></div>
      </div>
    ),
    { ...size },
  );
}
