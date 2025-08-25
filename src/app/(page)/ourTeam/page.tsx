import { Footbar, Navbar, ProductDropdowns, ProductList, OurTeamProfile } from "@/components";


export default function ourTeam() {
    return (
        <div className="wrapper">
            <Navbar />
            <OurTeamProfile />
            <Footbar />
        </div>
    );
}