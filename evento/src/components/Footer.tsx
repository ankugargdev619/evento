import FooterSection from "./FooterSection";

const quickLink = [
    {
        name : "Home",
        link : "#"
    },
    {
        name : "Events",
        link : "#"
    },
    {
        name : "Merchandise",
        link : "#"
    }
]

const supportLink = [
    {
        name : "FAQs",
        link : "#"
    },
    {
        name : "Refund Policy",
        link : "#"
    },
    {
        name : "Terms of Service",
        link : "#"
    },
    {
        name : "Privacy Policy",
        link : "#"
    },
    {
        name : "Code of Conduct",
        link : "#"
    }
]

const companyLink = [
    {
        name : "About Us",
        link : "#"
    },
    {
        name : "Contact Us",
        link : "#"
    },
    {
        name : "Careers",
        link : "#"
    },
    {
        name : "FAQs",
        link : "#"
    }
]

const socialLink = [
    {
        name : "Facebook",
        link : "#"
    },
    {
        name : "Twitter",
        link : "#"
    },
    {
        name : "Instagram",
        link : "#"
    }
]

export default function Footer(){
    return <div className=" bg-blue-950">
        <div className="mx-4 md:mx-40 py-4 flex gap-36">
            <FooterSection title="Quick Links" links={quickLink} />
            <FooterSection title="Customer Support" links={supportLink} />
            <FooterSection title="Company" links={companyLink} />
            <FooterSection title="Social Media" links={socialLink} />
        </div>
    </div>
}