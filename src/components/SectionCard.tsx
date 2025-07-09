"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface SectionCardProps {
    icon: ReactNode;
    title: string;
    subtitle: string;
    cta: string;
    href: string;
}

const SectionCard: FC<SectionCardProps> = ({ icon, title, subtitle, cta, href }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl"
        >
            <div className="text-primary">{icon}</div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-muted-foreground flex-1">{subtitle}</p>
            <Link href={href} className="mt-2 inline-flex items-center gap-2 text-primary font-medium hover:underline">
                {cta}
            </Link>
        </motion.div>
    );
};

export { SectionCard }; 