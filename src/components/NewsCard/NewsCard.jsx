import "./NewsCard.css";
import {Link} from "react-router-dom";

export function NewsCard({ news , dataRows}) {
	console.log("news", news, dataRows);
	return (
		<div className="newsCard container-column">
           

				<div className="description-details">
					<h3 style={{ wordBreak: "break-all", margin: "0px", marginBottom:"0.5rem" }}>
						{news["Title:"]}
					</h3>
					
				</div>
				<div className="description-next">
					<p>{news["Description :"]}</p>
				</div>
				

			 
			<div className="card-img-container">
				<a href={news["Link to Source :"]} target="_blank">Source</a>
			</div>
		</div>
	);
}
