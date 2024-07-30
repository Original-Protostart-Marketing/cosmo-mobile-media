import { useRef, useState } from "react";
import { CircleX, HardDriveUpload, Image } from "lucide-react";

const FileUploader = ({ onFileSelect, error }: { onFileSelect: (file: File) => void; error?: { message: string } }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            onFileSelect(event.target.files[0]);
            setSelectedFile(event.target.files[0]);
        }
    };
    console.log(error);

    const onChooseFile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const onClearFile = () => {
        setSelectedFile(null);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
            />
            {!selectedFile && (
                <button
                    className="w-full h-[150px] text-[18px] font-[500] flex flex-col items-center justify-center gap-[15px] text-[#fff] border-[#2e2a3a] bg-[#3b364c] border-dashed border-[1.5px] rounded-[20px] cursor-pointer transition-all duration-300 ease hover:opacity-80"
                    onClick={onChooseFile}
                >
                    <span className="w-[50px] h-[50px] text-white flex items-center justify-center rounded-[25px] bg-[#2e2e2e]">
                        <HardDriveUpload className="text-[30px]" />
                    </span>{" "}
                    Upload File
                </button>
            )}
            {error && (
                <span className="text-red-500 text-sm mt-2">{error?.message as string}</span>
            )}

            {selectedFile && (
                <>
                    <div className="w-full flex items-center gap-[15px] text-[#fff] border-[#2e2a3a] bg-[#3b364c] border rounded-[6px] px-[15px] py-[8px] md:w-[330px]">
                        <Image className="w-[30px] h-[30px]" />
                        <h6 className="flex-1 text-[13px] max-w-[70%] font-[400] break-words">
                            {selectedFile.name}
                        </h6>
                        <button onClick={onClearFile}>
                            <CircleX className="w-[30px] h-[30px] flex items-center justify-center text-[#e4e5e6] bg-[#61727b] border-none rounded-[30px] hover:text-[#2e2e2e]" />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default FileUploader;
