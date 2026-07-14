import { ButtonProps } from "@/types";

export default function Button({ label, variant, href, onClick }: ButtonProps) {
    // ── Primary variant (unchanged) ──────────────────────────
    if (variant === "primary") {
        const content = (
            <span className="relative overflow-hidden rounded-lg px-4 py-3 xs:px-5 xs:py-4 inline-flex items-center justify-center bg-[#CD3234]/80 hover:bg-[#B82B2D] transition-colors">
                <span
                    className="absolute inset-0 opacity-100 mix-blend-multiply"
                    style={{
                        backgroundImage: "url('/assets/images/texture-crumpled-paper.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <span className="relative z-10 text-[#F0EDE8] text-sm xs:text-base font-semibold font-urbanist">
                    {label}
                </span>
            </span>
        );
        return href ? <a href={href}>{content}</a> : <button onClick={onClick}>{content}</button>;
    }

    // ── Glass variant — Figma Glass plugin translation ────────
    //
    //  Figma Glass settings:
    //    Light: -45°, 60%  →  top-right bright edge, dimmer bottom-left
    //    Refraction: 20    →  backdrop-filter blur (low-medium)
    //    Depth: 20         →  subtle dark tint overlay
    //    Dispersion: 20    →  slight chromatic spread on edges (faked via border gradient)
    //    Frost: 4          →  very light noise texture
    //    Splay: 12         →  light spread / soft inner glow
    //
    //  Frame:  160 Hug × 56 Hug  |  radius 12  |  padding 24/16
    //  Stroke: #FFFFFF 20%  weight 1  center
    // ─────────────────────────────────────────────────────────
    // KEY FIX: backdrop-filter কখনো overflow:hidden এর ভেতরে কাজ করে না।
    // তাই blur টা একটা আলাদা absolute child এ রাখতে হবে,
    // আর wrapper এ overflow:hidden থাকবে না।
    const glassContent = (
        <span
            className="relative inline-flex justify-center items-center"
            style={{
                padding: "16px 24px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.20)",
                boxShadow: `
                    inset 1px 1px 0px rgba(255, 255, 255, 0.30),
                    inset -1px -1px 0px rgba(255, 255, 255, 0.06),
                    inset 0 0 20px 0 rgba(255, 255, 255, 0.08)
                `,
            }}
        >
            {/* ── Blur layer (MUST be a child, not on parent) ── */}
            {/* overflow:hidden এখানে safe কারণ এটা parent না */}
            <span
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden"
                style={{
                    borderRadius: "12px",
                    backdropFilter: "blur(12px) saturate(1.6)",
                    WebkitBackdropFilter: "blur(12px) saturate(1.6)",
                }}
            />

            {/* ── Depth tint layer (rgba dark wash) ── */}
            <span
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                    borderRadius: "12px",
                    background: "rgba(0, 0, 0, 0.18)",
                }}
            />

            {/* ── Light direction: -45° top-right bright ── */}
            <span
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                    borderRadius: "12px",
                    background:
                        "linear-gradient(225deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.06) 100%)",
                }}
            />

            {/* ── Dispersion edges ── */}
            <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 pointer-events-none"
                style={{
                    height: "1px",
                    borderRadius: "12px 12px 0 0",
                    background:
                        "linear-gradient(90deg, rgba(120,180,255,0.20), rgba(255,255,255,0.50), rgba(255,160,120,0.20))",
                }}
            />

            {/* ── Label ── */}
            <span
                className="relative z-10 select-none"
                style={{
                    color: "#F6F4F2",
                    fontSize: "18px",
                    fontFamily: "Urbanist",
                    fontWeight: 600,
                    lineHeight: "23.76px",
                    wordWrap: "break-word",
                    textShadow: "0 1px 6px rgba(0,0,0,0.40)",
                }}
            >
                {label}
            </span>
        </span>
    );

    const wrapperClass = "inline-flex transition-transform duration-200 hover:scale-105";

    if (href) {
        return (
            <a href={href} className={wrapperClass}>
                {glassContent}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={wrapperClass}>
            {glassContent}
        </button>
    );
}