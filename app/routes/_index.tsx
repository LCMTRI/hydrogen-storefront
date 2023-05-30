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
    <div className="my-20">
      <h2 className="text-[#6c4f2c] mb-10">新しいアイテム</h2>
      <ItemList1 />
      <ItemList2 />

      <h2 className="text-[#6c4f2c] mb-10">ピックアップ商品</h2>
      <ItemList3 />
    </div>
  );
}