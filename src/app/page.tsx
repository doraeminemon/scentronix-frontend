import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="navbar w-full px-4 py-8">
        <div className="flex items gap-4">
          <div className="uppercase">Shop</div>
          <div className="uppercase">Recipes</div>
          <div className="uppercase">Learn</div>
          <div className="uppercase">About</div>
          <div className="uppercase">Blog</div>
        </div>
      </div>
      <div className="submenu px-2 py-4">
        <div className="flex items gap-3 text-xs">
          <div className="item uppercase">categories</div>
          <div className="item uppercase">collection</div>
          <div className="item uppercase">resources</div>
        </div>
      </div>
      <div className="main-body grid grid-cols-2">
        <div className="col-1">
          <div className="breadcrumb uppercase text-xs flex">
            <div className="item pr-1">recipes</div>
            <div className="item pr-1">bread</div>
            <div className="item pr-1">quick bread</div>
          </div>
          <div className="title text-2xl pb-14">Whole-Grain Banana Bread</div>
          <div className="description">
            This one-bowl banana bread - our 2018 Recipe of the Year - uses the simplest ingredients, but is incredibly moist and flavorful.
While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it&apos;s that good! And not only is this bread delicious — it&apos;s versatile.
          </div>
          <div className="time flex">
            <div className="item">
              <div className="step uppercase text-xs">prep</div>
              <div className="time">10 mins</div>
            </div>
            <div className="item">
              <div className="step uppercase text-xs">bake</div>
              <div className="time">1 hr to 1 hr 15 mins</div>
            </div>
            <div className="item">
              <div className="step uppercase text-xs">total</div>
              <div className="time">1 hr 10 mins</div>
            </div>
          </div>
          <div className="more-items flex">
            <div className="item">
              <div className="step uppercase text-xs">yield</div>
              <div className="time">1 loaf, 12 generous servings</div>
            </div>
            <button className="button uppercase border border-red-300 text-sm">Save recipe</button>
            <button className="button uppercase border border-red-300 text-sm">Print</button>
          </div>
        </div>
        <div className="col-2">
          <Image src={'/banana-bread.jpg'} alt="banana bread" width={800} height={600}/>
        </div>
      </div>
    </main>
  );
}
