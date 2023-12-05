// Import ทุกอย่างที่คุณจำเป็น
import Nav from "@/components/Nav1";
import { plasticType, glassType, metalType, paperType, plasticHero } from "@/data";
import CardItem from '@/components/CardInfo';
import { ItemTypeList, HeroTypeList } from '../../../type';
import Footer from "@/components/Footer";
export default function Page({ params }: { params: { slug: string } }) {
    let data: ItemTypeList = [];
    let hero: HeroTypeList = [];
    let header: string = "";
    switch (params.slug) {
        case '1':
            data = plasticType;
            header = "ประเภทของพลาสติกที่เรารับ";
            break;
        case '2':
            data = glassType;
            header = "ประเภทของแก้วที่เรารับ";

            break;
        case '3':
            data = metalType;
            header = "ประเภทของเหล็กที่เรารับ";

            break;
        case '4':
            data = paperType;
            header = "ประเภทของกระดาษที่เรารับ";

            break;
        default:
            break;
    }

    return (
        <>
            <div className="bg-indigo-100">

                <div className='shadow-xl shadow-gray-300'>
                    <Nav />
                </div>

                <div className="container mx-auto text-center mt-10">
                    <div className='pb-5'>
                        <h1 className="text-5xl font-bold text-green-500 mb-6">
                            <span className="border-b-4 border-yellow-500 pb-2" >
                                {header}
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="bg-indigo-100  pb-10">
                    <p className="pt-5 text-center">อย่าลืมแยกขยะก่อนนำส่งนะครับ</p>

                    <div className="container mx-auto mb-20 grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {data.map((item) => (
                            <CardItem key={item.code} item={item} pic={item.pic} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
