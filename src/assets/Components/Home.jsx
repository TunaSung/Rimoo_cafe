import Btn from "./Btn";
import Hero from "./Hero";
import ImgContainer from "./ImgContainer";
import Navbar from "./Navbar";


function Home(){
    return(
        <>
            {/* Start header */}
            <Navbar />
            {/* End header */}

            {/* Start main */}

            {/* Start jumbotron */}
            <div id="jumbotron" className="relative pt-56 pb-40 bg-[url('./assets/images/bg/bg001.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
                <div className="absolute inset-0 bg-black/60"></div>
                <div id="container" className="container mx-auto px-4 w-3/4 flex justify-center items-center flex-col">
                    <div id="logo" className="w-80 h-80 bg-[url('./assets/images/common/logo-w.png')] bg-no-repeat bg-cover bg-center z-2"></div>
                    <div id="btn-group" className="flex justify-center gap-3 z-2">
                        <Btn text="加入我們"/>
                        <Btn text="關於我們"/>
                    </div>
                </div>
            </div>
            {/* End jumbotron */}

            {/* Start about */}
            <Hero color="#fefefe">
                <div id="container" className="container mx-auto px-4 w-[75%] flex justify-center items-center">
                    <div id="row" className="grid grid-cols-2 gap-8 items-center">
                        <div id="about-preview">
                            <h3 id="title" className="text-[32px] text-[#333] font-bold mt-10 mb-6 flex items-center">每杯咖啡留著手的餘溫</h3>
                            <p id="para" className="text-[16px] text-[#333] mb-6 text-justify leading-loose line-clamp-3">
                            一個咖啡有溫度的故事，只要咖啡加熱，沸騰到攝氏100度，你就可以用手摸摸看，應該會十分的燙手，一個咖啡有溫度的故事，只要咖啡加熱，沸騰到攝氏100度，你就可以用手摸摸看，應該會十分的燙手，一個咖啡有溫度的故事，只要咖啡加熱，沸騰到攝氏100度，你就可以用手摸摸看，應該會十分的燙手。
                            </p>
                            <a href="#!">
                                <Btn text="更多我們的故事"/>
                            </a>
                        </div>
                        <ImgContainer img="products/product005.jpg"/>
                    </div>
                </div>
            </Hero>
            {/* End about */}

            {/* End service */}
            <Hero color="#efefef">
                <div id="container" className="container mx-auto w-[75%] px-4 flex flex-col justify-center items-center">
                    <div id="service-intro" className="text-center mb-10">
                        <h2 id="title" className="text-5xl text-[#333] mb-12 font-bold">SERVICES</h2>
                        <p id="para" className="text-[#333] text-base leading-loose">我們提供的服務在這裡有初步的介紹<br />多的文字換恆繼續寫</p>
                    </div>
                    <div id="row" className="row  grid grid-cols-3 gap-8">
                        <div id="service-item">
                            <ImgContainer img="products/product001.jpg"/>
                            <div id="preview">
                                <h4 id="title" className="text-2xl mb-2 text-[#333]">香濃的咖啡</h4>
                                <h5 id="sub-title" className="text-btnColor mb-4">現煮的香濃咖啡，優質的咖啡豆</h5>
                                <p id="para" className="mb-4 text-justify line-clamp-4">一段中文的敘述文字，說明東西的美味及外觀等等的話，一段中文的敘述文字，說明東西的美味及外觀等等的話。一段中文的敘述文字，說明東西的美味及外觀等等的話，一段中文的敘述文字，說明東西的美味及外觀等等的話。</p>
                                <Btn text="Read more" />
                            </div>
                        </div>
                        <div id="service-item">
                            <ImgContainer img="products/product002.jpg"/>
                            <div id="preview">
                                <h4 id="title" className="text-2xl mb-2 text-[#333]">香濃的咖啡</h4>
                                <h5 id="sub-title" className="text-btnColor mb-4">現煮的香濃咖啡，優質的咖啡豆</h5>
                                <p id="para" className="mb-4 text-justify line-clamp-4">一段中文的敘述文字，說明東西的美味及外觀等等的話，一段中文的敘述文字，說明東西的美味及外觀等等的話。一段中文的敘述文字，說明東西的美味及外觀等等的話，一段中文的敘述文字，說明東西的美味及外觀等等的話。</p>
                                <Btn text="Read more" />
                            </div>
                        </div>
                        <div id="service-item">
                            <ImgContainer img="products/product003.jpg"/>
                            <div id="preview">
                                <h4 id="title" className="text-2xl mb-2 text-[#333]">香濃的咖啡</h4>
                                <h5 id="sub-title" className="text-btnColor mb-4">現煮的香濃咖啡，優質的咖啡豆</h5>
                                <p id="para" className="mb-4 text-justify line-clamp-4">一段中文的敘述文字，說明東西的美味及外觀等等的話，一段中文的敘述文字，說明東西的美味及外觀等等的話。一段中文的敘述文字，說明東西的美味及外觀等等的話，一段中文的敘述文字，說明東西的美味及外觀等等的話。</p>
                                <Btn text="Read more" />
                            </div>
                        </div>
                    </div>
                </div>
            </Hero>
            {/* End service */}

            {/* Start reservation */}
            <div className="relative pt-56 pb-40 bg-[url('./assets/images/bg/bg002.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
                <div className="absolute inset-0 bg-black/60"></div>
                <div id="container" className="container mx-auto px-4 w-3/4 flex justify-center items-center flex-col z-8">
                    <div id="service-intro" className="text-center mb-6 z-2">
                        <h2 id="title" className="text-5xl text-[#FFF] mb-12 font-bold">RESERVATION</h2>
                        <p id="para" className="text-[#FFF] text-base leading-loose">我們提供的服務在這裡有初步的介紹<br />多的文字換恆繼續寫</p>
                    </div>
                    <div className="z-2">
                        <Btn text="訂位請點我" />
                    </div>
                </div>
            </div>
            {/* End reservation */}

            {/* Start menu */}
            <Hero color="#fefefe">
                <div id="container" className="container mx-auto px-4 w-3/4 flex justify-center items-center flex-col ">
                    <div id="service-intro" className="text-center mb-6">
                        <h2 id="title" className="text-5xl text-[#333] mb-6 font-bold">MENU</h2>
                        <p id="para" className="text-[#333] text-base leading-loose">我們提供的服務在這裡有初步的介紹<br />多的文字換恆繼續寫</p>
                    </div>
                    
                    <div id="menu-list" className="w-full mb-20 last:mb-0">
                        <div id="title-bar" className="flex justify-between items-center mb-4">
                            <h3 id="title" className="text-2xl text-btnColor font-bold">Coffee & Beverage</h3>
                            <Btn text="more" />
                        </div>
                        <div id="menu-items" className="grid grid-cols-4 gap-8">
                            <a href="#!">
                                <ImgContainer img="products/product005.jpg" />
                                <h5 id="title" className="text-lg font-bold mt-4 mb-2">阿拉斯加咖啡</h5>
                                <h6 id="sub-title" className="text-sm font-bold text-btnColor">供應的條件</h6>
                            </a>
                            <a href="#!">
                                <ImgContainer img="products/product006.jpg" />
                                <h5 id="title" className="text-lg font-bold mt-4 mb-2">阿拉斯加咖啡</h5>
                                <h6 id="sub-title" className="text-sm font-bold text-btnColor">供應的條件</h6>
                            </a>
                            <a href="#!">
                                <ImgContainer img="products/product007.jpg" />
                                <h5 id="title" className="text-lg font-bold mt-4 mb-2">阿拉斯加咖啡</h5>
                                <h6 id="sub-title" className="text-sm font-bold text-btnColor">供應的條件</h6>
                            </a>
                            <a href="#!">
                                <ImgContainer img="products/product008.jpg" />
                                <h5 id="title" className="text-lg font-bold mt-4 mb-2">阿拉斯加咖啡</h5>
                                <h6 id="sub-title" className="text-sm font-bold text-btnColor">供應的條件</h6>
                            </a>
                        </div>
                    </div>
                    <div id="menu-list" className="w-full mb-20 last:mb-0">
                        <div id="title-bar" className="flex justify-between items-center mb-4">
                            <h3 id="title" className="text-2xl text-btnColor font-bold">Coffee & Beverage</h3>
                            <Btn text="more" />
                        </div>
                        <div id="menu-items" className="grid grid-cols-4 gap-8">
                            <a href="#!">
                                <ImgContainer img="products/product005.jpg" />
                                <h5 id="title" className="text-lg font-bold mt-4 mb-2">阿拉斯加咖啡</h5>
                                <h6 id="sub-title" className="text-sm font-bold text-btnColor">供應的條件</h6>
                            </a>
                            <a href="#!">
                                <ImgContainer img="products/product006.jpg" />
                                <h5 id="title" className="text-lg font-bold mt-4 mb-2">阿拉斯加咖啡</h5>
                                <h6 id="sub-title" className="text-sm font-bold text-btnColor">供應的條件</h6>
                            </a>
                            <a href="#!">
                                <ImgContainer img="products/product007.jpg" />
                                <h5 id="title" className="text-lg font-bold mt-4 mb-2">阿拉斯加咖啡</h5>
                                <h6 id="sub-title" className="text-sm font-bold text-btnColor">供應的條件</h6>
                            </a>
                            <a href="#!">
                                <ImgContainer img="products/product008.jpg" />
                                <h5 id="title" className="text-lg font-bold mt-4 mb-2">阿拉斯加咖啡</h5>
                                <h6 id="sub-title" className="text-sm font-bold text-btnColor">供應的條件</h6>
                            </a>
                        </div>
                    </div>
                </div>
            </Hero>
            {/* End menu */}


            {/* Start contact */}
            <Hero color="#efefef">
                <div id="container" className="container mx-auto px-4 w-3/4 flex justify-center items-center flex-col ">
                    <div id="service-intro" className="text-center mb-10">
                        <h2 id="title" className="text-5xl text-[#333] mb-6 font-bold">CONTACT</h2>
                        <p id="para" className="text-[#333] text-base leading-loose">我們提供的服務在這裡有初步的介紹<br />多的文字換恆繼續寫</p>
                    </div>
                    <div id="row" className="w-full row grid grid-cols-2 gap-8">
                        <div id="contact-info" className="pt-16">
                            <div id="info-item" className="mb-6">
                                <div id="title" className="text-btnColor font-bold mb-4 "><span className="border-b-2 border-b-btnColor leading-loose pb-2">PHONE & TELL</span> </div>
                                <a href="tel:0931910536" className="text-[#333] leading-loose">0931-910-536</a>
                            </div>
                            <div id="info-item" className="mb-6">
                                <div id="title" className="text-btnColor font-bold mb-4 "><span className="border-b-2 border-b-btnColor leading-loose pb-2">LOCATION</span> </div>
                                <a href="tel:0931910536" className="text-[#333] leading-loose">台北市中山區中山北路二段77巷20號</a>
                            </div>
                            <div id="info-item">
                                <div id="title" className="text-btnColor font-bold mb-4 "><span className="border-b-2 border-b-btnColor leading-loose pb-2">HOURS</span> </div>
                                <div className="text-[#333] leading-loose">11:00-18:00 每周四公休</div>
                            </div>
                        </div>
                        <div id="map-container" className="relative w-full pt-[75%]">
                            <iframe className="absolute inset-0"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7228.628316840217!2d121.51533327361693!3d25.057339057348763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a93328a081f9%3A0xa4b99021a9254244!2z5piH5Lit5bGx!5e0!3m2!1szh-TW!2stw!4v1741336288742!5m2!1szh-TW!2stw" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </Hero>
            {/* End contact */}
            
            {/* End main */}
            
            {/* Start footer */}
            
            <div id="footer" className="relative bg-[url('./assets/images/bg/bg003.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
            <div className="absolute inset-0 bg-black/60"></div>
                <Hero>
                    <div id="container" className="container mx-auto px-4 w-3/4 flex justify-center items-center flex-col">
                        <div id="logo" className="w-60 h-60 bg-[url('./assets/images/common/logo-w.png')] bg-no-repeat bg-cover bg-center z-2"></div>
                    </div>
                    <ul className={`relative z-2 gap-10 flex justify-center mt-6`}>
                        {["關於","服務","訂位","菜單","聯絡"].map((item)=>(
                            <li key={item} className='sm:text-center'>
                                <a href="#!" className="text-white hover:text-yellow-500 transition duration-300 ">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Hero>
                <div className="relative z-2 text-center text-lg text-[#CCC] leading-6 py-4 bg-black/20">
                    <p>© 2021 Rimoo Cafe. All Rights Reserved.</p>
                </div>
            </div>
            
            {/* End footer */}
        </>
    )
}
export default Home;