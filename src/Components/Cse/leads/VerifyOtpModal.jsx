import React, { useState } from 'react';
import toast from 'react-hot-toast';

const VerifyOtpModal = ({ CloseVerifyOtpModal, email, scheduleId }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (value, index) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            setError(''); // Clear error when user starts typing
            
            // Auto-focus next input
            if (value && index < 3) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
            
            // Auto-submit when all digits are entered
            if (index === 3 && value) {
                const isComplete = newOtp.every(digit => digit !== '');
                if (isComplete) {
                    // Small delay to let user see the last digit
                    setTimeout(() => handleSubmit(), 100);
                }
            }
        }
    };

    const handleKeyDown = (e, index) => {
        // Handle backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        const pastedDigits = pastedData.replace(/\D/g, '').slice(0, 4).split('');
        
        if (pastedDigits.length === 4) {
            setOtp(pastedDigits);
            setError('');
            document.getElementById(`otp-3`).focus();
        }
    };

    const handleSubmit = async () => {
        const otpValue = otp.join('');

        if (otpValue.length !== 4) {
            setError('Please enter a valid 4-digit OTP.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Static verification logic
            const data = {
                email: email,
                otp: otpValue,
                scheduleId: scheduleId
            };
            
            console.log("OTP Verification Data:", data);

            // Simulate successful verification
            // In a real scenario, you might have specific OTP validation logic
            const isValidOtp = otpValue === '1234' || otpValue === '0000' || otpValue === '9999'; // Demo valid OTPs
            
            if (isValidOtp) {
                toast.success('OTP verified successfully! Demo completed.');
                CloseVerifyOtpModal();
                
                // You can add additional success actions here
                // For example, update client status, redirect, etc.
            } else {
                setError('Invalid OTP. Please try again.');
                toast.error('Invalid OTP entered.');
            }
            
        } catch (err) {
            console.log("OTP verification error:", err);
            setError('An error occurred during verification. Please try again.');
            toast.error('Verification failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        setLoading(true);
        try {
            // Simulate resend OTP delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Static resend logic
            console.log("Resending OTP to:", email);
            toast.success('OTP has been resent to your email.');
            
            // Clear previous OTP
            setOtp(['', '', '', '']);
            setError('');
            
            // Focus first input
            document.getElementById('otp-0').focus();
            
        } catch (error) {
            toast.error('Failed to resend OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Check if all OTP digits are filled
    const isOtpComplete = otp.every(digit => digit !== '');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative">
                {/* Close Button */}
                <button
                    onClick={CloseVerifyOtpModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify OTP</h2>
                    <p className="text-gray-600">
                        Enter the 4-digit OTP sent to
                    </p>
                    <p className="text-gray-800 font-medium break-words">{email}</p>
                </div>

                {/* OTP Inputs */}
                <div className="flex justify-between gap-3 mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            inputMode="numeric"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={index === 0 ? handlePaste : undefined}
                            className="w-14 h-14 border-2 border-gray-300 rounded-xl text-center text-2xl font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                            autoFocus={index === 0}
                            disabled={loading}
                        />
                    ))}
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-center text-sm">{error}</p>
                    </div>
                )}

                {/* Demo Hint */}
                <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-600 text-center text-sm">
                        💡 Demo: Try OTP <strong>1234</strong>, <strong>0000</strong>, or <strong>9999</strong>
                    </p>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    disabled={!isOtpComplete || loading}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 mb-4
                        ${!isOtpComplete || loading
                            ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                        }`}
                >
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Verifying...
                        </div>
                    ) : (
                        'Verify OTP'
                    )}
                </button>

                {/* Resend OTP */}
                <div className="text-center">
                    <button
                        onClick={handleResendOtp}
                        disabled={loading}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        Didn't receive code? Resend OTP
                    </button>
                </div>

                {/* Schedule Info */}
                <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-500">
                        Schedule ID: <span className="font-mono">{scheduleId}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtpModal;