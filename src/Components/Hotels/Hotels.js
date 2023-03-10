import React, {useEffect, useState} from 'react'
import './Hotels.css'
import pool from '../../Images/Hotel Features/pool.png'
import drink from '../../Images/Hotel Features/drinks.png'
import breakfast from '../../Images/Hotel Features/Breakfast.png'
import { db } from '../../Config/Firebase.config'
import { getDocs, collection } from 'firebase/firestore'


import HotelsCard from './HotelsCard'
import About from '../About'
import LoadingSpinner from '../Spinner/LoadingSpinner'

const Hotels = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const [posts, setPosts] = useState([])
const [loading, setLoading] = useState(false)
    useEffect(() => {
        getImages();
    }, [])

    const getImages = async () => {
        try {
            setLoading(true)
            const postItem = [];
            const querySnapshot = await getDocs(collection(db, "Hotels"));
            querySnapshot.forEach((doc) => {
                console.log('Inside')
                const { name, image, number, location } = doc.data();
                postItem.push({
                    id:doc.id,
                    name: name,
                    image: image,
                    number: number,
                    location:location,
                });
            });
            console.log(postItem)
            setPosts(postItem);
            setLoading(false)
        } catch (excep) {
            console.log(excep);
        }
    }

    return (
        <>
            <div style={{ backgroundImage: 'radial-gradient(at center center,rgb(241, 244, 255) 0%,white 83%)' }} className='py-5'>
                <div className="container text-center w-75" >
                    <h1 className='primaryHeading'>Finest Hotels</h1>
                    <p className="smallpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione expedita accusamus est doloribus maxime esse voluptates atque non, cum, id vero eveniet autem sequi tempora accusantium quis perferendis mollitia?</p>
                </div>

                <div className="container">
                    <h1 className='primaryHeading' style={{ color: 'rgb(191 28 28)' }}>Luxury Hotels</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero earum suscipit ipsam ad Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti placeat esse inventore dignissimos consequatur! Libero alias temporibus est tempore impedit perspiciatis voluptatum id pariatur, vel odit nobis dolor corrupti sapiente.</p>
                    <div className="container">
                        <div className="row ">
                            {loading ? <div className='d-flex align-items-center my-5 justify-content-center'><LoadingSpinner/></div> : posts.map((item) => {
                                return <div key={item.id} className="col-md-4 my-3 col-sm-6 col-12">
                                    <HotelsCard key={item.id} image={[item.image[0], item.image[1], item.image[2], item.image[3], item.image[4], item.image[5]]} name={item.name} feature1={pool} feature2={drink} feature3={breakfast} location={item.location} />
                                </div>
                            })}
                            {/* <div className="col-md-4 my-3 col-sm-6 col-12">
                                <HotelsCard image={[khan1, khan2, khan3, khan4]} name="Hotel Khan Plaza" feature2={pool} feature1={drink} feature3={breakfast} />
                            </div>
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <HotelsCard image={[inn1, inn2, inn3, inn4, inn5, inn6]} name="INN BOUTIQUE HOTEL" feature1={pool} feature3={drink} feature2={breakfast} />
                            </div>
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <HotelsCard image={[mirpur1, mirpur2, mirpur3, mirpur4, mirpur5]} name="Mirpur AJK Serviced Villa" feature1={pool} feature3={drink} feature2={breakfast} />
                            </div>
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <HotelsCard image={[lotus1, lotus2, lotus3, lotus4, lotus5]} name="Lotus Inn" feature1={pool} feature3={drink} feature2={breakfast} />
                            </div>
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <HotelsCard image={[usman1, usman2, usman3, usman4, usman5, usman6]} name="Usman Lodges Ajk" feature1={pool} feature3={drink} feature2={breakfast} />
                            </div>
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <HotelsCard image={[undrah, undrah1, undrah2, undrah3, undrah4]} name="Undrah Inn Hotel" feature1={pool} feature3={drink} feature2={breakfast} />
                            </div> */}
                        </div>
                    </div>
                </div>

                <About />
            </div>
        </>
    )
}

export default Hotels