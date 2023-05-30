import { Image } from "@shopify/hydrogen";
import ItemList1 from "~/components/ItemLists/ItemList1";
import ItemList2 from "~/components/ItemLists/ItemList2";
import ItemList3 from "~/components/ItemLists/ItemList3";
import Seasonal from "~/components/ItemLists/Seasonal";

export function meta() {
  return [
    {title: 'Donguri-sora'},
    {description: 'A donguri-sora theme shop'},
  ];
}
export default function Index() {
  return (
    <div className="my-20 relative max-w-[1200px]">
      <div className="mb-10 flex flex-row gap-5">
        <a className='text-[#6c4f2c] hover:text-[#669858]' href="#">
          <h2 className="underline underline-offset-3">新しいアイテム</h2>
        </a>
      </div>
      
      <div>
        <ItemList1 />
        <ItemList2 />
      </div>

      <div className="mb-10 flex flex-row gap-5">
        <a className='text-[#6c4f2c] hover:text-[#669858]' href="#">
          <h2 className="underline underline-offset-3">ピックアップ商品</h2>
        </a>
      </div>
      <ItemList3 />

      <div className="mb-10 flex flex-row gap-5">
        <a className='text-[#6c4f2c] hover:text-[#669858]' href="#">
          <h2 className="underline underline-offset-3">季節限定</h2>
        </a>
      </div>
      <Seasonal />
    </div>
  );
}