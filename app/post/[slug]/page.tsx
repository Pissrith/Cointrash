"use client"
import Navbar1 from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";

export default function Page({ params }: { params: { slug: string } }) {
    
    return (
        <>
            <Navbar1 />
            <Navbar2 />
            <div>My Post: {params.slug}</div>
        </>
    );
}
