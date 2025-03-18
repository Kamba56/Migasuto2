import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { FaFile } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";

interface FileUploadProps {
  title: string;
  formats: string[];
  maxFiles: number;
  maxSize: number;
  required?: boolean;
  name: string;
  error?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  title,
  formats,
  maxFiles,
  maxSize,
  required = false,
  name,
  error,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const { setValue, register, watch } = useFormContext();

  // Ensure form data is updated when files change
  useEffect(() => {
    setValue(name, files, { shouldValidate: true });
  }, [files, name, setValue]);

  // File drop handler
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const validFiles = acceptedFiles.filter((file) => {
        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        return (
          fileExtension &&
          formats.includes(fileExtension) &&
          file.size <= maxSize * 1024 * 1024
        );
      });

      if (files.length + validFiles.length > maxFiles) {
        alert(`You can only upload up to ${maxFiles} files.`);
        return;
      }

      setFiles([...files, ...validFiles]);
    },
    [files, formats, maxFiles, maxSize]
  );

  // Remove a file
  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  // React Dropzone Configuration
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: maxSize * 1024 * 1024,
    accept: formats.reduce((acc, ext) => ({ ...acc, [`.${ext}`]: [] }), {}),
  });

  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <label className="block font-semibold mb-2 text-[16px]">
        {title} {required && <span className="text-red-500">*</span>}
      </label>
      <p className="text-sm text-gray-500 mb-2">
        Upload up to {maxFiles} files. Max {maxSize} MB per file.
      </p>

      {/* Dropzone Area */}
      <div
        {...getRootProps()}
        className={`p-6 py-28 border-[3px] border-gray border-dashed transition duration-300 rounded-lg text-center cursor-pointer ${
          isDragActive ? "border-primary bg-blue-50" : "border-gray-300 bg-gray-100"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div>
            <MdCloudUpload
              size={48}
              className="text-secondary mx-auto animate-bounce"
            />
            <p className="text-blue-500">Drop the files here...</p>
          </div>
        ) : (
          <div>
            <MdCloudUpload
              size={48}
              className="text-secondary mx-auto animate-bounce"
            />
            <p className="text-secondary_dark">
              Drag and drop some files here, or click to select files
            </p>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-lg">{error}</p>}

      {/* List of Uploaded Files */}
      {files.length > 0 && (
        <ul className="mt-3 text-sm text-gray-600">
          {files.map((file, index) => (
            <li
              key={index}
              className="border-2 border-platinum rounded-lg bg-ghost_white px-3 py-2 mt-1 flex items-center"
            >
              <div className="p-2 border-platinum border-2 rounded-2xl mr-3">
                <FaFile size={24} className="text-secondary_dark" />
              </div>
              {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              <button
                onClick={() => removeFile(index)}
                className=" ml-auto text-red-500 hover:text-red-700"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function FileUploadForm({errors}: any){
  return (
    <div>
       <FileUpload
          title="Business Bank Statements (Format: Excel, PDF)"
          formats={["pdf", "xls", "xlsx"]}
          maxFiles={10}
          maxSize={10}
          name="bank_statement"
          error={errors.bank_statement?.message?.toString()}
        />
        <FileUpload
          title="Cash Flow Statements (Format: PDF, Excel)"
          formats={["pdf", "xls", "xlsx"]}
          maxFiles={10}
          maxSize={10}
          name="cash_flow_statement"
          error={errors.cash_flow_statement?.message?.toString()}
        />
        <FileUpload
          title="Budget Documents (Format: PDF, Excel)"
          formats={["pdf", "xls", "xlsx"]}
          maxFiles={5}
          maxSize={100}
          name="budget_document"
          error={errors.budget_document?.message?.toString()}
        />
    </div>
  )
}

export default FileUploadForm;
