import React from "react"
import "./ap1.css"
import Extra from "./extra.js"
import Extra1 from "./extra1.js"
import Extra2 from "./extra2.js"
import {Check} from "./util1"
//import images
import harry from "./harry.jpg"
import pop from "./pop.jpg"
import av from "./avenger.jpg"
import cap from "./cap.jpg"
import faf from "./faf.jpg"
import got from "./got.jpg"
import hobbit from "./hobbit.jpg"
import ironman from "./ironman.jpg"
import joker from "./joker.jpg"
import mi from "./mi.jpg"
import moneyheist from "./moneyheist.jpg"
import titanic from "./titanic.jpg"
//import sounds
import harrym from "./hp1.mp3"
import popm from "./pop.mp3"
import avm from "./av.mp3"
import capm from "./capm.mp3"
import fafm from "./fafm.mp3"
import gotm from "./gotm.mp3"
import hobbitm from "./hobbitm.mp3"
import ironmanm from "./ironmanm.mp3"
import jokerm from "./jokerm.mp3"
import mim from "./mim.mp3"
import moneyheistm from "./moneyheistm.mp3"
import titanicm from "./titanicm.mp3"

class Ap1 extends React.Component{
    audio1=new Audio(harrym)
    audio2=new Audio(popm)
    audio3=new Audio(avm)
    audio4=new Audio(capm)
    audio5=new Audio(fafm)
    audio6=new Audio(gotm)
    audio7=new Audio(hobbitm)
    audio8=new Audio(ironmanm)
    audio9=new Audio(jokerm)
    audio10=new Audio(mim)
    audio11=new Audio(moneyheistm)
    audio12=new Audio(titanicm)
    
    state={
        val:true,
        bname:"Show More",
        music:false,
        playno:999,
        sound:[this.audio1,this.audio2,this.audio3,this.audio4,this.audio5,this.audio6,this.audio7,this.audio8,this.audio9,this.audio10,this.audio11,this.audio12],
        delcount:0,
        //array of object 
        details:[
            {
                id:1,
                mname:"Harry Potter",
                price:100,
                im:harry
            },
            {
                id:2,
                mname:"Pirates Of Caribbean",
                price:70,
                im:pop
            },
            {
                id:3,
                mname:"Avengers",
                price:80,
                im:av
            },
            {
                id:4,
                mname:"Captain America",
                price:80,
                im:cap
            },
            {
                id:5,
                mname:"Fast And Furious",
                price:80,
                im:faf
            },
            {
                id:6,
                mname:"Game Of Thrones",
                price:80,
                im:got
            },
            {
                id:7,
                mname:"Hobbit",
                price:80,
                im:hobbit
            },
            {
                id:8,
                mname:"Ironman",
                price:80,
                im:ironman
            },
            {
                id:9,
                mname:"Joker",
                price:80,
                im:joker
            },
            {
                id:10,
                mname:"Mission Imposible",
                price:80,
                im:mi
            },
            {
                id:11,
                mname:"Money Heist",
                price:80,
                im:moneyheist
            },
            {
                id:12,
                mname:"Titanic",
                price:80,
                im:titanic
            },
            
        ],
        deldetails:[]
    }
    
    
    getid=(id)=>{
        // alert(id+"id button pressed")
        if(this.state.music==false )
        {
            if(this.state.playno!=id)
            {
                this.state.sound[id-1].play()
                this.setState({music:true})
                this.setState({playno:id})
            }
            else if(this.state.playno==id)
            {
                this.state.sound[id-1].play()
                this.setState({music:true})
                this.setState({playno:id})
            }
            this.state.sound.map((item,newpos)=>{
                if((id-1)!=newpos)
                {
                    item.pause()
                }
            })
        }
        else if(this.state.music==true)
        {
            if(this.state.playno==id)
            {
                this.state.sound[id-1].pause()
                this.setState({music:false})
                this.setState({playno:id})
            }
            else if(this.state.playno!=id)
            {
                this.state.sound[id-1].play()
                this.setState({music:true})
                this.setState({playno:id})
            }
            this.state.sound.map((item,newpos)=>{
                if((id-1)!=newpos)
                {
                    item.pause()
                }
            })
        }        
    }

    del=(id)=>{
        // alert("id is: "+id)
        let detail=this.state.details.filter((item)=>{
            return item.id!==id
        })

        let deldetails=this.state.details.filter((item)=>{
            return item.id==id
        })
    
        this.setState({delcount:this.state.delcount+1})
        // console.log("count; ",n)
        this.setState({deldetails:deldetails.concat(this.state.deldetails)})
        // console.log("del details",this.state.delcount,this.state.deldetails)
        // console.log("count; ",this.state.delcount)
        
        console.log("brfore details",this.state.details)
        console.log("new details",detail)
        this.setState({details:detail})
        console.log("after details",this.state.details)

    }

    
    
    showb=()=>{
        // alert("show clicked")
        this.state.val==true?this.setState({val:false}):this.setState({val:true})
    }
    ghi=()=>{
        return(
            <div className="card3" id={this.state.delcount}>
                <p>Tap on pic to Play/Pause.</p>
            </div>
        )
    }
    
    onclickadd=(id)=>{
        console.log("id is:"+id)
        let getdeletedmovie=this.state.deldetails.filter((item)=>{
            return item.id==id
        })
        let remaindeletedmovie=this.state.deldetails.filter((item)=>{
            return item.id!=id
        })
        let deldetails=remaindeletedmovie
        this.setState({details:this.state.details.concat(getdeletedmovie)})
        this.setState({deldetails:deldetails})
        this.setState({delcount:this.state.delcount-1})
        
    }

    render(){
        const abc=Check(this.state.details)?[]:this.state.details.map((item,pos)=>{
            console.log(item)
            return(
                <Extra key={pos} mname={item.mname} price={item.price} im={item.im} getid={this.getid} position={pos} id={item.id} del={this.del}/>
            )
        })

        // const deltable=()=>{
        //     return(
        //         <div className="card3">
        //             <button>{this.state.delcount}</button>
        //         </div>
        //     )
        // }
        const deltable=this.state.deldetails.map((item)=>{
            console.log("count",this.state.delcount)
            console.log("deteed idetms0",item)
            return(
                <Extra2 id={item.id} mname={item.mname} onclickadd={this.onclickadd} item={item}/>
            )
        })

        const def=<Extra1></Extra1>

        const addbuttonsec=()=>{
            let text="Add card from here: "
            return(
                <div className="buttondiv">
                    <p>{text}</p>
                </div>
            )
        }

        return(
            <div className="Ap1">
                
                <div className="first">
                    <h1>MOVIES COLLECTION</h1>
                    <button className="show" onClick={this.showb}>{this.state.val?"Show More":"Show Less"}</button>
                    <p></p>
                    {/* <button onClick={this.playm}>{this.state.music?"stop":"play"}</button> */}
                    {/* <button>{this.state.music?"true":"false"}</button> */}
                </div>
                <div className="third">
                    {this.state.val?[]:this.ghi()}
                </div>
                <div className="forth">
                    {this.state.delcount>0?addbuttonsec():[]}
                    {this.state.delcount>0?deltable:[]}
                </div>
                <div className="sec">
                    <p></p>
                    {this.state.val?def:abc}
                </div>
                
            </div>
            
        )
    }
    
}
export default Ap1