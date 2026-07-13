import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="relative z-10 w-full h-[80px] xs:h-[96px] md:h-[115px] px-4 xs:px-6 md:px-12 lg:px-24 xl:px-[200px] py-3 xs:py-4 md:py-5 flex items-center">
            <div className="w-full flex items-center justify-between">
                <Image
                    src="/assets/icons/icon-logo-yar.svg"
                    alt="YAR"
                    width={114}
                    height={64}
                    style={{ height: "auto" }}
                    className="w-[80px] xs:w-[96px] md:w-[114px]"
                />
                <button
                    aria-label="Open menu"
                    className="p-2 xs:p-3.5 rounded-lg flex items-center justify-center"
                >
                    <Image
                        src="/assets/icons/icon-menu-grid.svg"
                        alt=""
                        width={64}
                        height={64}
                        style={{ height: "auto" }}
                        className="w-10 xs:w-12 md:w-16"
                    />
                </button>
            </div>
        </nav>
    );
}