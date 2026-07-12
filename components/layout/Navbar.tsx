import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="relative z-10 w-full h-[115px] px-6 md:px-[200px] py-5 flex items-center">
            <div className="w-full flex items-center justify-between">
                <Image
                    src="/assets/icons/icon-logo-yar.svg"
                    alt="YAR"
                    width={114}
                    height={64}
                    style={{ height: "auto" }}
                />
                <button
                    aria-label="Open menu"
                    className="p-3.5 rounded-lg flex items-center justify-center"
                >
                    <Image
                        src="/assets/icons/icon-menu-grid.svg"
                        alt=""
                        width={64}
                        height={64}
                        style={{ height: "auto" }}
                    />
                </button>
            </div>
        </nav>
    );
}