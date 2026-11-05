'use client';

import { motion } from 'framer-motion';
import { CardPageConfig } from '@/types/page';
import InstitutionName from '@/components/ui/InstitutionName';

export default function CardPage({ config, embedded = false }: { config: CardPageConfig; embedded?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className={embedded ? "mb-4" : "mb-8"}>
                <h1 className={embedded ? "section-heading" : "page-heading"}>{config.title}</h1>
                {config.description && (
                    <p className={`${embedded ? "text-base" : "text-lg"} text-neutral-600 dark:text-neutral-500 max-w-2xl`}>
                        {config.description}
                    </p>
                )}
            </div>

            <div className="grid gap-4">
                {config.items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className={`academic-card ${embedded ? "p-5" : "p-6"}`}
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-2">
                            <h3 className="entry-title text-primary">{item.title}</h3>
                            {item.date && (
                                <span className="font-mono text-[0.6875rem] text-detail whitespace-nowrap">
                                    {item.date}
                                </span>
                            )}
                        </div>
                        {item.subtitle && (
                            <p className="entry-meta text-neutral-600 mb-2"><InstitutionName name={item.subtitle} /></p>
                        )}
                        {item.content && (
                            <p className="entry-description text-neutral-600 dark:text-neutral-500">
                                {item.content}
                            </p>
                        )}
                        {item.tags && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs text-neutral-500 bg-neutral-50 dark:bg-neutral-800/50 px-2 py-1 rounded border border-neutral-100 dark:border-neutral-800">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
