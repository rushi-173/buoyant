import React from "react";
import "./Home.css";
import {Link} from "react-router-dom";
import { Banner, NewsCard } from "../../components/index";

export function Home({data, dataRows}) {
	console.log("from home",data, dataRows);
	// const imgUrl = dataRows[6];
	// console.log(data[0][imgUrl]);

	return (
		<div className="container-column Home">
			<Banner/><br/><br/>
			<h4 className="text-box-top-mini"><span>❤️</span> WALL &nbsp;OF&nbsp; HAPPINESS <span>❤️</span></h4>
			<div className="news-container">
				{data.map((item)=>{
					if(item["verified"]=="1"){
					return <NewsCard news={item} dataRows={dataRows}/>
					}
					return null;
					
				})}
			</div>

		</div>
	);
}
