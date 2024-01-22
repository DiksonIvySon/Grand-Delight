import React, {Component} from 'react';
import './About.css'

import { NavLink } from "react-router-dom";

import Nav from '../Components/nav';
import Header from '../Components/homeHeader';
import Footer from '../Components/footer';
import SectionHeader from '../Components/SectionHeader';

import feast from '../images/feast.jpg';
import openSpace from '../images/openSpace.jpg';
import wineLibrary from '../images/wineLibrary.jpg';

function About() {

    return(
        <section className='body'>
            <Nav />
            <Header />
            <main className='aboutPage section-margin'>
                <div>
                    <div className="header-heading">
                        <h1>About</h1>
                    </div>
                    <p>
                        Meaning gold in Latin, Grand Delight Restaurant opened its doors in November 2019, overlooking Sandton 
                        from the 7th floor of The Leonardo - which is South Africa's new tallest building. The restaurant 
                        is the brainchild of esteemed chef and culinary consultant, Paulo Santo, in collaboration with 
                        the Legacy Group and its chairman, Bart Dorrestein. True to its name, Grand Delight delivers timeless 
                        prestige with its unique culinary offerings, creating a golden experience in the modern day. 
                         Grand Delight represents luxury, but not in an intimidating, pretentious or ostentatious manner. 
                        Just as gold is timeless in its appeal, we too wish to exist beyond time as a successful, 
                        renowned business, serving a cosmopolitan African city; the City of Gold,” says Paulo Santo, 
                        MD and Senior Partner of Grand Delight.
                    </p>
                </div>
                <div>
                    <SectionHeader SectionHeader_text="A Feast At The Grand Delight"/>
                    <div className='aboutPage-flex'>
                        <div className='aboutPage-para'>
                            <p>
                                The Grand Delight kitchen is headed up by Paulo's former chef colleagues at Cube Tasting Kitchen; 
                                Darren O'Donovan (Head Chef) and Lisa de Beer (Sous Chef and Sommelier). Inspired by 
                                Darren and Lisa's travels and favourite dishes, Grand Delight offers plates which are seen as 
                                epicurean, being contemporary European cuisine with a touch of local flair. Grand Delight has 
                                two seasonal menus per year; Spring/Summer and Autumn/Winter, with the majority of its 
                                ingredients being locally sourced. 
                            </p>
                            <NavLink className='primary-btn' to="/menu">View Menu</NavLink>
                        </div>
                        <div className='aboutPage-image'>
                            <img src={feast} alt='feast food image'></img>
                        </div>
                    </div>
                    <p>
                        By day, Grand Delight presents their Light menu, Solis, consisting of an a la carte breakfast, brunch and 
                        lunch offering. By night, Grand Delight takes on a sense of luxury manifested as the Dark menu, Luna, for 
                        dinner. Paulo is known for using a patron's sense of taste and smell to play on something called 
                        synesthesia. This is where the brain connotes particular tastes or smells to certain memories. 
                        This plays throughout the entire menu cycle. Signature dishes include Cured Springbok, Slow Braised 
                        Pork Belly and 'Afternoon Tea', a dessert inspired by the nostalgia of dunking Ouma rusks into tea, 
                        showcasing local flavours of rooibos, buttermilk and clemengold. 
                        “A meal at Grand Delight will aim to engage our patrons on an emotional level. We want to create experiences, 
                        share memories, build strong relationships and gain the trust of our patrons through our product and 
                        service offering. Grand Delight stands to take an old-world approach to service with a modern, new-world 
                        approach to cuisine,”  
                    </p>
                </div>
                <div>
                    <SectionHeader SectionHeader_text="The Wine Library"/>
                    <div className='aboutPage-flex'>
                        <div className='aboutPage-image'>
                            <img src={wineLibrary} alt='wine library image'></img>
                        </div>
                        <div className='aboutPage-para'>
                            <p>
                                Grand Delight's wine list was compiled by Lisa and features 99 of both South Africa and the globe's finest wines, 
                                many of which are available by the glass. The wine list has been designed in a way to convey the best on 
                                offer from around the world, without being pretentious and inaccessible. The list enables guests to be 
                                exploratory, at the same time favourites from the Cape Winelands are on offer - for those preferring a 
                                more familiar taste. Within the Wine Library, one can peruse over a smaller list that boasts special 
                                vintages, limited releases on offer as well as some different, more "edgy" cultivars and blends for 
                                those feeling adventurous. 
                            </p>
                            <NavLink className='primary-btn2' to="/drinksPage">Open Complete Drinks Menu</NavLink>
                        </div>
                    </div>
                    <p>
                        Specialist mixologist, Alex Farnell has been brought on board to design and develop the cocktail list, 
                        which features fun, trendy and edgy drinks with the right amount of traditional sophistication. 
                        Expect to find some of the world's finest spirits brought to life in exquisite cocktails and signature mixes. 
                    </p>
                </div>
                <div>
                    <SectionHeader SectionHeader_text="The space"/>
                    <div className='aboutPage-flex'>
                        <p>
                            Grand Delight restaurant forms the heart of the lifestyle hub of The Leonardo building and overlooks its sunlit 
                            pool terrace. Designed by Varoom Interiors, it features interior seating for 160pax, exterior seating 
                            for 80pax, two private dining facilities and a Wine Library. The interiors were designed around three 
                            frameworks: the seventh-floor artwork themed around the element of air; the transparent, exposed 
                            architecture with visible columns and beams; and Johannesburg, being both The City of Gold and the 
                            largest urban forest in the world. From the main artwork installation representing a golden flow of 
                            air, the gold and green paint hues, together with the clever selection of custom designed furniture 
                            combining natural leathers and timbers with subtle touches of gold throughout were all designed and 
                            curated to showcase the design frameworks.
                        </p>
                        <div className='aboutPage-image'>
                            <img src={openSpace} alt='Open space seating image'></img>
                        </div>
                    </div>
                    <p>
                        The restaurant's interior seating features booth tables, offering a sense of intimacy and privacy, while 
                        the spacious main bar offers patrons a suitable holding space while they await their guests or preferred 
                        table. Although the restaurant setup during the day is minimalised, it holds its elegance, creating an 
                        emphasis on the space itself and its beautiful architecture. Table settings at night are upgraded to lush 
                        cotton tablecloths with matching napery. Together with gold and onyx green colours and thoughtful lighting 
                        arrangements, a softer, more romantic mood is created.The pool terrace highlights the preferred pastime of 
                        most South Africans; looking beautiful under the African sun, sipping on a cold, refreshing beverage and 
                        creating lasting memories. The sun loungers and terrace daybeds offer patrons of Grand Delight the luxury of a 
                        poolside tanning spot, coupled with world-class service; a welcome reprieve from the concrete jungle around us. 

                        <br />
                        <br />

                        The Wine Library sits on the mezzanine level and overlooks the restaurant floor. This space has a warm, 
                        rich, robust feel, with its design lending it the feel of a cigar lounge. Patrons are invited to come and 
                        relax here in the evening, while enjoying a special glass of something from the sommelier's selection. 
                        The bottles are displayed in temperature accurate wine coolers and the seating boasts luxuriously upholstered 
                        armchairs. All the furniture in Grand Delight has been locally manufactured and custom made for the restaurant. 
                        From the lighting, to the artwork, to the furniture - the designer truly aspired to a 'local is lekker' mindset. 

                        <br />
                        <br />

                        “Our goal was to create a timeless interior that would merge the sophistication of fine dining with a warm, 
                        welcoming atmosphere. A place where everyone that visits feels like they belong,” says Vanessa Preston of Varoom Interiors. 
                    </p>
                </div>
            </main>
            <Footer />
        </section>
    );
}

export default About;