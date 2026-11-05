'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/24/outline';
import { Publication } from '@/types/publication';
import { useMessages } from '@/lib/i18n/useMessages';

interface SelectedPublicationsProps {
    publications: Publication[];
    title?: string;
    enableOnePageMode?: boolean;
}

export default function SelectedPublications({ publications, title, enableOnePageMode = false }: SelectedPublicationsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.selectedPublications;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className="section-heading-row">
                <h2 className="section-heading-title">{resolvedTitle}</h2>
                <Link
                    href={enableOnePageMode ? "/#publications" : "/publications"}
                    prefetch={true}
                    className="font-sans text-xs text-accent hover:text-accent-dark transition-colors"
                >
                    {messages.home.viewAll} →
                </Link>
            </div>
            <div className="space-y-5">
                {publications.map((pub, index) => (
                    <motion.div
                        key={pub.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="paper-entry"
                    >
                        <h3 className="entry-title text-primary mb-2">
                            {pub.title}
                        </h3>
                        <p className="entry-meta text-neutral-600 dark:text-neutral-500 mb-2">
                            {pub.authors.map((author, idx) => (
                                <span key={idx}>
                                    <span className={`${author.isHighlighted ? 'font-semibold text-accent' : ''} ${author.isCoAuthor ? `underline underline-offset-4 ${author.isHighlighted ? 'decoration-accent' : 'decoration-neutral-400'}` : ''}`}>
                                        {author.name}
                                    </span>
                                    {author.isCorresponding && (
                                        <sup className={`ml-0 ${author.isHighlighted ? 'text-accent' : 'text-neutral-600 dark:text-neutral-500'}`}>†</sup>
                                    )}
                                    {idx < pub.authors.length - 1 && ', '}
                                </span>
                            ))}
                        </p>
                        <p className="entry-meta text-neutral-600 dark:text-neutral-500 mb-3">
                            {pub.journal || pub.conference}
                        </p>
                        {pub.url && (
                            <a
                                href={pub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="paper-link mb-3 inline-flex items-center"
                            >
                                <LinkIcon className="mr-1.5 h-3 w-3" />
                                {messages.publications.projectPage}
                            </a>
                        )}
                        {pub.description && (
                            <p className="entry-description text-neutral-600 dark:text-neutral-500 line-clamp-2">
                                {pub.description}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
