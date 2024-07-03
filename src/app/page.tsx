import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="navbar w-full py-6 flex lg:px-16 px-8">
        <div className="flex items gap-4 max-w-screen-lg">
          <a href="/" className="uppercase">Shop</a>
          <a href="/" className="uppercase underline decoration-red-500 underline-offset-8">Recipes</a>
          <a href="/" className="uppercase">Learn</a>
          <a href="/" className="uppercase">About</a>
          <a href="/" className="uppercase">Blog</a>
        </div>
      </div>
      <div className="submenu lg:px-16 px-8 py-4 bg-[#F6F4EE]">
        <div className="flex items gap-3 text-xs">
          <a href="/" className="item uppercase">categories</a>
          <a href="/" className="item uppercase">collection</a>
          <a href="/" className="item uppercase">resources</a>
        </div>
      </div>
      <div className="main-body grid lg:grid-cols-2 lg:px-16 px-8 lg:py-12 py-6 gap-8">
        <div className="col-1 order-2 lg:order-1">
          <div className="breadcrumb uppercase text-xs flex font-bold pb-4">
            <div className="item pr-1">recipes</div>
            <div className="item pr-1">bread</div>
            <div className="item pr-1">quick bread</div>
          </div>
          <div className="title text-2xl pb-14">Whole-Grain Banana Bread</div>
          <div className="description pb-4">
            This one-bowl banana bread - our 2018 Recipe of the Year - uses the simplest ingredients, but is incredibly moist and flavorful.
While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it&apos;s that good! And not only is this bread delicious — it&apos;s versatile.
          </div>
          <div className="time flex pb-4 gap-4">
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
          <div className="more-items flex gap-4">
            <div className="item">
              <div className="step uppercase text-xs">yield</div>
              <div className="time">1 loaf, 12 generous servings</div>
            </div>
            <button className="button uppercase border border-red-500 rounded-md px-3 text-sm">Save recipe</button>
            <button className="button uppercase border border-red-500 rounded-md px-3 text-sm">Print</button>
          </div>
        </div>
        <div className="col-2 order-1 lg:order-2">
          <Image src={'/banana-bread.jpg'} alt="banana bread" width={800} height={600}/>
        </div>
      </div>
    </main>
  );
}
