import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { FaFile } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";

interface FileUploadProps {
  title: string;
  formats: string[];
  maxSize: number;
  required?: boolean;
  name: string;
  error?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  title,
  formats,
  maxSize,
  required = false,
  name,
  error,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const { setValue } = useFormContext();

  // Ensure form data is updated when file changes
  useEffect(() => {
    setValue(name, file, { shouldValidate: true });
  }, [file, name, setValue]);

  // File drop handler
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const validFile = acceptedFiles.find((file) => {
        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        return (
          fileExtension &&
          formats.includes(fileExtension) &&
          file.size <= maxSize * 1024 * 1024
        );
      });

      if (!validFile) {
        alert(`Invalid file. Only ${formats.join(", ")} up to ${maxSize}MB are allowed.`);
        return;
      }

      setFile(validFile);
    },
    [formats, maxSize]
  );

  // Remove file
  const removeFile = () => setFile(null);

  // React Dropzone Configuration
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false, // Ensure only one file is selected
    maxSize: maxSize * 1024 * 1024,
    accept: formats.reduce((acc, ext) => ({ ...acc, [`.${ext}`]: [] }), {}),
  });

  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <label className="block font-semibold mb-2 text-[16px]">
        {title} {required && <span className="text-red-500">*</span>}
      </label>
      <p className="text-sm text-gray-500 mb-2">
        Upload a single file (Max {maxSize} MB).
      </p>

      {/* Dropzone Area */}
      <div
        {...getRootProps()}
        className={`p-6 py-28 border-[3px] border-dashed transition duration-300 rounded-lg text-center cursor-pointer ${
          isDragActive ? "border-primary bg-blue-50" : "border-gray-300 bg-gray-100"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div>
            <MdCloudUpload size={48} className="text-secondary mx-auto animate-bounce" />
            <p className="text-blue-500">Drop the file here...</p>
          </div>
        ) : (
          <div>
            <MdCloudUpload size={48} className="text-secondary mx-auto animate-bounce" />
            <p className="text-secondary_dark">
              Drag and drop a file here, or click to select one
            </p>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-lg">{error}</p>}

      {/* Display Selected File */}
      {file && (
        <div className="mt-3 text-sm text-gray-600 border-2 border-platinum rounded-lg bg-ghost_white px-3 py-2 flex items-center">
          <div className="p-2 border-platinum border-2 rounded-2xl mr-3">
            <FaFile size={24} className="text-secondary_dark" />
          </div>
          {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
          <button onClick={removeFile} className="ml-auto text-red-500 hover:text-red-700">
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

function FileUploadForm({ errors }: any) {
  return (
    <div>
      <FileUpload
        title="Business Bank Statement (Format: Excel, PDF)"
        formats={["pdf", "xls", "xlsx"]}
        maxSize={10}
        name="bank_statement"
        error={errors.bank_statement?.message?.toString()}
      />
      <FileUpload
        title="Cash Flow Statement (Format: PDF, Excel)"
        formats={["pdf", "xls", "xlsx"]}
        maxSize={10}
        name="cash_flow_statement"
        error={errors.cash_flow_statement?.message?.toString()}
      />
      <FileUpload
        title="Budget Document (Format: PDF, Excel)"
        formats={["pdf", "xls", "xlsx"]}
        maxSize={100}
        name="budget_document"
        error={errors.budget_document?.message?.toString()}
      />
    </div>
  )
}

export default FileUploadForm;
