export default function PoolMenu() {
  return (
    <div className='bg-[#231f20] my-10 px-6 '>
      <h1 className='flex justify-between text-7xl text-white py-10'>
        <span className='uppercase font-light'>
          Blast <span className='text-red-500'>&</span> Brew
        </span>
        <span className='text-red-500 text-2xl uppercase  self-end'>
          Seacrest Hotel
        </span>
      </h1>
      <div className='text-white leading-7 tracking-wide px-4'>
        <p className='text-2xl font-semibold mb-2'>
          To order, Call{' '}
          <a className='hover:text-red-500' href='tel:(805)556-3600'>
            (805) 556-3600
          </a>
        </p>
        <p>
          And let someone from our team know what table you are located at, you
          can find the table number labeled on the QR code plaque.
        </p>
        <p className='pt-6 font-light tracking-widest'>
          <span className='text-red-500'>$5 Delivery Charge</span>
          <br />
          Minimum delivery order $20
        </p>
        <p className='italic text-sm font-light p-4'>
          TAXES NOT INCLUDED. DELIVERY CHARGES WILL APPLY. PRICES SUBJECT TO
          CHANGE. CAN NOT BE COMBINED WITH ANY COUPONS OR OFFERS.
        </p>
      </div>
      <div className='grid lg:grid-cols-2 gap-4'>
        {/* Appetizer section start */}
        <section className='px-12 bg-zinc-800 rounded-md'>
          <h2 className='font-extrabold text-3xl text-center text-white py-10'>
            Tappetizers
          </h2>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Crispy Brussel Sprouts
            </h3>
            <p className='text-red-500'>| 15</p>
            <p className='col-span-2'>
              Crispy Bacon, Parmesan, Balsamic Glaze
              <br />
              Add Bacon +$2 | Add Blue Cheese Crumbles +2
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Taproom Fries
            </h3>
            <p className='text-red-500'>| 12</p>
            <p className='col-span-2'>Served with Classic Housemade Ranch</p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Chips and Housemade Salsa
            </h3>
            <p className='text-red-500'>| 10</p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Gigantic Dough Boy Pretzel
            </h3>
            <p className='text-red-500'>| 12</p>
            <p className='col-span-2'>Served with Housemade Beer Cheese</p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Waffle Fries
            </h3>
            <p className='text-red-500'>| 12</p>
            <p className='col-span-2'>Served with Classic Housemade Ranch</p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Golden Onion Ring Stack
            </h3>
            <p className='text-red-500'>| 14</p>
            <p className='col-span-2'>Served with Classic Housemade Ranch</p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>Calamari</h3>
            <p className='text-red-500'>| 18</p>
            <p className='col-span-2'>Served with Housemade Chipotle Aioli</p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Blast 825 Jumbo Chicken Wings
            </h3>
            <p className='text-red-500'>
              <span className='text-white uppercase text-sm'>ten pieces </span>|
              18
            </p>
            <p className='col-span-2'>
              Served with side of Waffle Fries and your choice of Ranch or Bleu
              Cheese
              <br />
              <span className='text-red-500'>CHOICE OF SAUCE:</span>
              <br />
              Red Hot | BBQ Mango Habanero | Sweet Chili Garlic | Natural
            </p>
          </div>
        </section>
        {/* Appetizer section end */}

        {/* Soup & Salad section start */}
        <section className='px-12 bg-zinc-800 rounded-md'>
          <h2 className='font-extrabold text-3xl text-center text-white py-10'>
            Salad & Soup
          </h2>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <p className='font-semibold text-xl uppercase pb-6 text-red-500'>
              Dressing Options:
            </p>
            <p className='col-span-2'>
              Home-Style Buttermilk Ranch | Bleu Cheese Blast 825 Creamy Russian
              | Creamy Balsamic Vinaigrette Chipotle Aioli | Red Wine
              Vinaigrette | Honey Mustard
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <p className='font-semibold text-xl uppercase pb-6 text-red-500'>
              Add a protein:
            </p>
            <p className='col-span-2'>
              Chicken +7 | Salmon +9 | Shrimp +9 | Tri-Tip +8
            </p>
            <p className='col-span-2 italic'>
              Turn our salad into a wrap & add fries for just +5
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              House Salad
            </h3>
            <p className='text-red-500'>| 12</p>
            <p className='col-span-2'>
              Mixed Greens, Cucumber, Tomato & Red Onion
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Traditional Caesar Salad
            </h3>
            <p className='text-red-500'>| 14</p>
            <p className='col-span-2'>
              Fresh Romaine Lettuce, Shredded Parmesan Cheese, House-Made
              Croutons
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Out of this Shell Clam Chowder
            </h3>
            <p className='col-span-2'>
              Cup | <span className='text-red-500'>7</span>
              <br />
              Bowl | <span className='text-red-500'>14</span>
            </p>
            <p className='col-span-2 italic'>
              Bread Bowl +4
              <br />
              Garlic Cheese Bread +3
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Crispy Brussel Sprouts
            </h3>
            <p className='text-red-500'>| 15</p>
            <p className='col-span-2'>
              Crispy Bacon, Parmesan, Balsamic Glaze
              <br />
              Add Bacon +$2 | Add Blue Cheese Crumbles +2
            </p>
          </div>
        </section>
        {/* Soup & Salad section end */}

        {/* Kids section start */}
        <section className='px-12 bg-zinc-800 rounded-md'>
          <h2 className='font-extrabold text-3xl text-center text-white py-10'>
            Kids Meals <span className='font-semibold px-4'> | </span>
            <span className='text-red-500 font-semibold'>11</span>
          </h2>
          <p className='text-white italic'>
            Served with Kid&apos;s Drink. Available for our Little Blasters 10
            and Under.
          </p>
          <div className='grid grid-cols-2'>
            <div className='leading-7 text-white py-6'>
              <h3 className='font-semibold text-xl uppercase pb-6'>
                Grilled Cheese & Fries
              </h3>
            </div>
            <div className='leading-7 text-white py-6'>
              <h3 className='font-semibold text-xl uppercase pb-6'>
                Chicken Strips & Fries
              </h3>
            </div>
            <div className='leading-7 text-white py-6'>
              <h3 className='font-semibold text-xl uppercase pb-6'>
                Mac N&apos; Cheese
              </h3>
            </div>
            <div className='leading-7 text-white py-6'>
              <h3 className='font-semibold text-xl uppercase pb-6'>
                Hamburger & Fries
              </h3>
              <p className='text-red-500'>Add Cheese +1</p>
            </div>
          </div>
        </section>
        {/* Kids section end */}

        {/* Sandwich section start */}
        <section className='px-12 bg-zinc-800 rounded-md'>
          <h2 className='font-extrabold text-3xl text-center text-white py-10'>
            Between The Bread
          </h2>
          <p className='text-white text-sm italic'>Taproom Fries included</p>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <p className='font-semibold text-xl uppercase pb-6 text-red-500'>
              Add ons:
            </p>
            <p className='col-span-2'>
              Cheese (Cheddar, Jack, Provolone) +3 Bacon +4 | Avocado +4 | Onion
              Rings +2 | Sweet Potato Fries +2 Mixed Green Salad +2
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Santa Maria Style Tri-Tip
            </h3>
            <p className='text-red-500'>| 20</p>
            <p className='col-span-2'>
              Seasoned, Grilled & Sliced in House! Garlic Butter on a Sourdough
              Baguette with your choice of Charred Salsa or Smoky BBQ Sauce
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              BBQ Carnitas Sandwich
            </h3>
            <p className='text-red-500'>| 20</p>
            <p className='col-span-2'>
              French Baguette with Seasoned Shredded Carnitas Pork, Coleslaw,
              BBQ Sauce, topped with Crispy Onion Straws
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Blast Burger
            </h3>
            <p className='text-red-500'>| 16</p>
            <p className='col-span-2'>
              Toasted Brioche Bun with Hand-Pressed Flame Grilled Certified
              Black Angus Beef Patty, Blast Burger Sauce, Lettuce, Tomato, Red
              Onions & Pickles
            </p>
          </div>
        </section>
        {/* Sandwich section end */}

        {/* Pasta section start */}
        <section className='px-12 bg-zinc-800 rounded-md'>
          <h2 className='font-extrabold text-3xl text-center text-white py-10'>
            Taproom Mac & Cheese
          </h2>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              The Classic Mac
            </h3>
            <p className='text-red-500'>| 16</p>
            <p className='col-span-2'>
              <i>A Vegetarian Delight!</i>
              <br />
              Rotellini smothered in our Classic Creamy Cheddar Sauce
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>Cali Mac</h3>
            <p className='text-red-500'>| 19</p>
            <p className='col-span-2'>
              <i>A local classic!</i>
              <br /> Bacon, Avocado & Pico De Gallo
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Primavera Mac
            </h3>
            <p className='text-red-500'>| 18</p>
            <p className='col-span-2'>
              Fresh local Broccoli, Zucchini, Squash, Mushrooms, Garlic, Basil,
              Rotellini and Creamy Parmesan Alfredo Sauce
            </p>
            <p className='font-semibold text-xl uppercase py-6 text-red-500'>
              Add ons:
            </p>
            <p className='col-span-2'>
              Chicken Breast +7 | Tri-Tip +9 | Carnitas +8
            </p>
          </div>
        </section>
        {/* Pasta section end */}

        {/* Pizza section start */}
        <section className='px-12 bg-zinc-800 rounded-md'>
          <h2 className='font-extrabold text-3xl text-center text-white py-10'>
            Artisan Pizzas
          </h2>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              You Can Call Me Jane
            </h3>
            <p className='text-red-500'>| 12</p>
            <p className='col-span-2'>
              Simple and to the point– a classic Original Red Sauce & our
              Signature Cheese Blend
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Pep In Your Step
            </h3>
            <p className='text-red-500'>| 13</p>
            <p className='col-span-2'>
              Original Red Sauce & packed to edge with Pepperoni
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Hawaiian Blast
            </h3>
            <p className='text-red-500'>| 18</p>
            <p className='col-span-2'>
              BBQ Base, Mozzarella Cheese, Pineapple, Bacon, Canadian Bacon &
              Jalapenos
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Pesto Chicken
            </h3>
            <p className='text-red-500'>| 19</p>
            <p className='col-span-2'>
              Pesto Sauce, Mozzarella, Tomato Red Onion, Artichokes, Flamed
              Grilled Chicken & Goat Cheese
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>Margherita</h3>
            <p className='text-red-500'>| 18</p>
            <p className='col-span-2'>
              Original Red Sauce, Fresh Mozzarella, Sliced Tomato, Fresh Basil &
              Olive Oil
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Santa Maria Valley Veggi
            </h3>
            <p className='text-red-500'>| 19</p>
            <p className='col-span-2'>
              Alfredo Sauce, Roasted Seasoned Veggies, Tomato, Mushrooms,
              Grilled Onion, Aritchoke Hearts, Garlic & Fresh Mozzarella
            </p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>The Cowboy</h3>
            <p className='text-red-500'>| 19</p>
            <p className='col-span-2'>
              Tri Tip, Red Onion, Mozzerella Cheese, Garlic & Parmesean Cheese
            </p>
            <p className='text-white italic col-span-2 mt-4'>
              Cauliflower Crust +3 | Gluten Free Crust +2
            </p>
          </div>
        </section>
        {/* Pizza section end */}

        {/* Dessert section start */}
        <section className='px-12 bg-zinc-800 rounded-md'>
          <h2 className='font-extrabold text-3xl text-center text-white py-10'>
            Sweets
          </h2>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Fresh Baked Chocolate Chip Cookies Baked to Perfection
            </h3>
            <p className='text-red-500'>| 5</p>
          </div>
          <div className='grid grid-cols-2 leading-7 text-white py-6'>
            <h3 className='font-semibold text-xl uppercase pb-6'>
              Death by Chocolate!
              <br />
              5-Layer Chocolate Cake
            </h3>
            <p className='text-red-500'>| 13</p>
          </div>
        </section>
        {/* Appetizer section end */}
      </div>
    </div>
  );
}
