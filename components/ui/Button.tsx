import { ButtonProps } from "@/types";

export default function Button({ label, variant, href, onClick }: ButtonProps) {
    if (variant === "primary") {
        const content = (
            <span className="relative overflow-hidden rounded-lg px-5 py-4 inline-flex items-center justify-center bg-[#CD3234]/80 hover:bg-[#B82B2D] transition-colors">
                {/* Texture overlay layer */}
                <span
                    className="absolute inset-0 opacity-100 mix-blend-multiply"
                    style={{
                        backgroundImage: "url('/assets/images/texture-crumpled-paper.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <span className="relative z-10 text-[#F0EDE8] text-base font-semibold font-urbanist">
                    {label}
                </span>
            </span>
        );
        return href ? <a href={href}>{content}</a> : <button onClick={onClick}>{content}</button>;
    }

    // Glass/secondary variant
    const glassStyle =
        "px-5 py-4 rounded-lg backdrop-blur-md bg-white/10 border border-white/40 shadow-sm text-[#5E5E5E] text-base font-semibold font-urbanist transition-all duration-200";

    if (href) {
        return (
            <a href={href} className={`${glassStyle} inline-flex items-center justify-center`}>
                {label}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={glassStyle}>
            {label}
        </button>
    );
}
<button data-cursor-hover data-cursor-label="Click">
    View Selected Work
</button>