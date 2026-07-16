import { ButtonProps } from "@/types";

export default function Button({
    label,
    variant,
    href,
    onClick,
    className,
    style,
    textColor,
}: ButtonProps) {

    // ── PRIMARY ──
    if (variant === "primary") {
        const content = (
            <span
                className="relative inline-flex items-center justify-center overflow-hidden rounded-[9.6px] h-12 sm:h-14 min-w-[160px] sm:min-w-[209px] px-5 sm:px-6"
                style={{ backgroundColor: "#CD3234" }}
            >
                <span
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: "url('/assets/images/btn-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        mixBlendMode: "multiply",
                    }}
                />
                <span className="relative z-10 font-urbanist font-semibold text-sm sm:text-base" style={{ color: "#F0EDE8" }}>
                    {label}
                </span>
            </span>
        );
        return href ? (
            <a href={href} className={`inline-flex ${className ?? ""}`} style={style}>{content}</a>
        ) : (
            <button onClick={onClick} className={`inline-flex ${className ?? ""}`} style={style}>{content}</button>
        );
    }

    // ── PRIMARY2 ──
    if (variant === "primary2") {
        const content = (
            <span
                className="relative inline-flex items-center justify-center overflow-hidden rounded-[9.6px] h-12 sm:h-14 min-w-[160px] sm:min-w-[209px] px-5 sm:px-6"
                style={{ backgroundColor: "#FFF6E8" }}
            >
                <span
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: "url('/assets/images/btn-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        mixBlendMode: "multiply",
                    }}
                />
                <span className="relative z-10 font-urbanist font-semibold text-sm sm:text-base" style={{ color: "#161616" }}>
                    {label}
                </span>
            </span>
        );
        return href ? (
            <a href={href} className={`inline-flex ${className ?? ""}`} style={style}>{content}</a>
        ) : (
            <button onClick={onClick} className={`inline-flex ${className ?? ""}`} style={style}>{content}</button>
        );
    }

    // ── FOR CTA SECTION ──
    if (variant === "forctasection") {
        const content = (
            <span
                className="relative inline-flex items-center justify-center overflow-hidden rounded-[9.6px] h-12 sm:h-14 min-w-[160px] sm:min-w-[209px] px-5 sm:px-6"
                style={{ backgroundColor: "#FFF6E8" }}
            >
                <span
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: "url('/assets/images/btn-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        mixBlendMode: "multiply",
                    }}
                />
                <span className="relative z-10 font-urbanist font-semibold text-sm sm:text-base" style={{ color: "#161616" }}>
                    {label}
                </span>
            </span>
        );
        return href ? (
            <a href={href} className={`inline-flex ${className ?? ""}`} style={style}>{content}</a>
        ) : (
            <button onClick={onClick} className={`inline-flex ${className ?? ""}`} style={style}>{content}</button>
        );
    }

    // ── GLASS ──
    if (variant === "glass") {
        const content = (
            <span
                className={`glass-btn ${className ?? ""}`}
                style={textColor ? { color: textColor } : undefined}
            >
                {label}
            </span>
        );
        return href ? (
            <a href={href} className="inline-flex">{content}</a>
        ) : (
            <button onClick={onClick} className="inline-flex">{content}</button>
        );
    }

    // ── FALLBACK ──
    return href ? (
        <a href={href} className={`inline-flex ${className ?? ""}`}>
            <span className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-urbanist text-sm font-medium bg-white text-slate-900">
                {label}
            </span>
        </a>
    ) : (
        <button onClick={onClick} className={`inline-flex ${className ?? ""}`}>
            <span className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-urbanist text-sm font-medium bg-white text-slate-900">
                {label}
            </span>
        </button>
    );
}