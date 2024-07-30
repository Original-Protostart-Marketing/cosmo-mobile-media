import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    value,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    value?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            <div className="">
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 flex flex-row items-center justify-between">
                    {title}
                    {icon}

                </div>
                <div className="font-sans font-normal text-neutral-600 text-2xl dark:text-neutral-300">
                    {value}
                </div>
            </div>
        </div>
    );
};
