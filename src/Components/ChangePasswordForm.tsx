import { useState, FormEvent, ChangeEvent } from 'react';

interface ChangePasswordFormProps {
  onSubmit?: (passwords: { password: string; verifyPassword: string }) => void;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState<string>('');
  const [verifyPassword, setVerifyPassword] = useState<string>('');

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleVerifyPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setVerifyPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle password change logic here
    onSubmit?.({ password, verifyPassword });
  };

  return (
    <div className="flex justify-center items-start w-full">
      <div className="w-3/6 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Enter Password <span className='text-red-500'>*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="verifyPassword" className="block font-medium mb-2">
              Verify Password <span className='text-red-500'>*</span>
            </label>
            <input
              type="password"
              id="verifyPassword"
              name="verifyPassword"
              value={verifyPassword}
              onChange={handleVerifyPasswordChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded w-full"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;