export interface ButtonProps {
    label: string;
    variant: "primary" | "glass";
    href?: string;
    onClick?: () => void;
}

export interface BadgeProps {
    icon: string;
    label: string;
    variant?: "glass" | "solid";
}

export interface StatCardProps {
    number: string;
    description: string;
    iconVariant: "years" | "industries" | "focus";
}

export interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    imagePosition: "top" | "bottom";
}

export interface TestimonialAvatarProps {
    image: string;
    active: boolean;
}