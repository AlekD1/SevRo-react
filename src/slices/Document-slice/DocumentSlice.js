import DocumentCard from "../../components/DocumentCard/DocumentCard";
import "./document.scss";
function DocumentSlice() {
	return (
		<div className="Document-slice">
			<div className="container">
				<div className="Document-slice__header">документы</div>
				<div className="Document-slice-container">
					<DocumentCard />
					<DocumentCard />
					<DocumentCard />
					<DocumentCard />
					<DocumentCard />
					<DocumentCard />
					<DocumentCard />
				</div>
			</div>
		</div>
	);
}

export default DocumentSlice;
