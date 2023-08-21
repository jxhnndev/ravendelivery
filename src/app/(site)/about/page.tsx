import { GiBeerHorn, GiHamburger, GiPizzaSlice } from "react-icons/gi"

const About = () => {
  return (
    <section className="flex items-center bg-stone-50 xl:h-screen font-poppins">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap items-center ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="lg:max-w-md">
              <span className="text-xl font-semibold text-gold uppercase">
                About Us</span>
              <h2 className="mt-4 mb-6 text-2xl font-bold">
                Fictional Restaurant Website with food delivery service</h2>
              <p className="mb-10 text-chelseaBlue">
                Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet isopinus
                ipaino amet Lorem ipsum dor amet is a dummy text</p>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="flex mb-4">
              <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-gold rounded text-gray-50">
                <GiPizzaSlice className="w-5 h-5"/>
              </span>
              <div>
                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Pizzas
                </h2>
                <p className="text-base leading-loose text-chelseaBlue">
                  Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet isopinus
                  ipaino
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-gold rounded text-gray-50">
                <GiHamburger className="w-5 h-5"/>
              </span>
              <div>
                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Burgers
                </h2>
                <p className="text-base leading-loose text-chelseaBlue">
                  Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet isopinus
                  ipaino
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-gold rounded text-gray-50">
                <GiBeerHorn className="w-5 h-5"/>
              </span>
              <div>
                <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Beer
                </h2>
                <p className="text-base leading-loose text-chelseaBlue">
                  Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet isopinus
                  ipaino
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About