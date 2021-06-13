import { ReactChild } from "react";

interface Props {
    title: string,
    children: ReactChild,

}
const Cards = ({ title, children }: Props) => {
    return (
        <div className="max-w-sm rounded overflow-hidden  shadow-lg  h-auto  hover:bg-indigo-300">
            <div className="px-10 py-10 h-full">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {children}
                </p>
            </div>
            {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
        </div>
    )
}
export default Cards;