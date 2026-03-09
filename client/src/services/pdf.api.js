import axios from "axios";
import { serverUrl } from "../App";
const PDFGenerate = async (result) => {
    try {
        const response = await axios.post(
            `${serverUrl}/api/pdf/generate-pdf`,
            { result },
            { responseType: "blob", withCredentials: true },
        );
        const blob = new Blob([response.data], {
            type: "application/pdf",
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "NotexaAI_notes.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.log("PDF download error:", error);
        throw new Error("Failed to generate PDF");
    }
};
export default PDFGenerate