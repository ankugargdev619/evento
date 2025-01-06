import React from "react"

interface SectionHeadingProps {
    children?: React.ReactNode;
}

export default function SectionHeading({children} : SectionHeadingProps) {
    return <>
        <h1 className="w-full text-center text-4xl text-brand-50 font-bold">{children}</h1>
    </>
}