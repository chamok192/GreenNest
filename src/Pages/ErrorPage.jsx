import React from 'react';
import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'Something went wrong';
  let details = '';

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText || ''}`.trim();
    if (typeof error.data === 'string') {
      details = error.data;
    } else if (error.data && typeof error.data === 'object') {
      try {
        details = JSON.stringify(error.data, null, 2);
      } catch {
        details = String(error.data);
      }
    }
  } else if (error instanceof Error) {
    title = error.name || 'Error';
    details = error.message || '';
  } else if (error && typeof error === 'object') {
    try {
      details = JSON.stringify(error, null, 2);
    } catch {
      details = String(error);
    }
  }

  const output = error && typeof error === 'object' && 'output' in error ? error.output : undefined;

  return (
    <div className="min-h-[50vh] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white border rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-red-600 mb-2">Oops!</h1>
        <p className="text-gray-800 font-semibold mb-4">{title}</p>

        {details ? (
          <pre className="bg-gray-100 text-sm p-3 rounded overflow-auto mb-4 whitespace-pre-wrap">{details}</pre>
        ) : null}

        {output !== undefined ? (
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-1">Error Output</p>
            <pre className="bg-gray-100 text-sm p-3 rounded overflow-auto whitespace-pre-wrap">{(() => {
              try {
                return JSON.stringify(output, null, 2);
              } catch {
                return String(output);
              }
            })()}</pre>
          </div>
        ) : null}

        <div className="flex gap-3">
          <button className="btn" onClick={() => (window.location.href = '/')}>Go Home</button>
          <button className="btn btn-outline" onClick={() => window.location.reload()}>Retry</button>
          <Link to="/" className="btn btn-link text-[#227540]">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
