'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

export default function UserGuide() {
  const pdfFiles = [
    {
      label: 'BROADLINK LOGISTICS SDN BHD – I-2503-0300',
      file: 'BROADLINK_LOGISTICS_SDN_BHD_I-2503-0300_16052025.pdf',
    },
    {
      label: 'ISLAND RECOVERY SERVICES PTE. LTD. – IRS34547',
      file: 'ISLAND_RECOVERY_SERVICES_PTE_LTD_IRS34547_08052025.pdf',
    },
  ];

  const [selectedFile, setSelectedFile] = useState(pdfFiles[0].file);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">User Guide: Automating Esker Invoice Download</h1>

      {/* Step 1 */}
      <Card className="mb-6">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">1. Run the Python Application</h2>
          <p>To start the invoice automation process:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Open <code>cmd</code> (Command Prompt).</li>
            <li>Navigate to the project folder: <code>cd esker-pending-payment\Scripts</code></li>
            <li>Activate the virtual environment: <code>activate</code></li>
            <li>Run the application: <code>python app.py</code></li>
          </ol>

          <div className="pt-4">
            <Image
              src="/images/cmd_run_app.jpg"
              alt="Run Python App in CMD"
              width={690}
              height={370}
              className="rounded-xl border shadow"
            />
            <p className="text-sm text-gray-500 mt-2">Figure 1: Command Prompt to run the Python application</p>
          </div>
        </CardContent>
      </Card>

      {/* Step 2 */}
      <Card className="mb-6">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">2. Process Automation Workflow</h2>
          <p>The Python app performs the following steps automatically:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Log in to the <strong>Esker</strong> platform.</li>
            <li>Example: Filter invoices by <code>Company code = SG77</code>, <code>Posting date = 16/05/2025</code>, <code>Status = Pending payment</code>.</li>
            <li>Download raw invoice data from screen.</li>
            <li>Parse and process into structured format (e.g., PDFs).</li>
            <li>Generate PDF files for each vendor invoice.</li>
          </ul>

          <div className="pt-4">
            <Image
              src="/images/raw_data_pending_payment.JPG"
              alt="Raw data from Esker"
              width={690}
              height={370}
              className="rounded-xl border shadow"
            />
            <p className="text-sm text-gray-500 mt-2">Figure 2a: Raw data download from Esker</p>
          </div>

          <div className="pt-4">
            <Image
              src="/images/excel_data_input.JPG"
              alt="Excel data input"
              width={680}
              height={340}
              className="rounded-xl border shadow"
            />
            <p className="text-sm text-gray-500 mt-2">Figure 2b: Excel data input</p>
          </div>
        </CardContent>
      </Card>

      {/* Step 3 */}
      <Card className="mb-6">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">3. Upload to Microsoft SharePoint</h2>
          <p>Processed PDF files are uploaded to the following SharePoint folder:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Root: <code>CHPL &gt; FINANCE &gt; Confidential &gt; AP &gt; 002 Cogent - Invoice</code></li>
            <li>Subfolder: <code>SG77 - SHCL</code></li>
            <li>Vendor folders (e.g., <code>BROADLINK LOGISTICS SDN BHD</code>)</li>
          </ul>

          <div className="pt-4">
            <Image
              src="/images/sharepoint_pending_payment.jpg"
              alt="SharePoint folder structure"
              width={690}
              height={370}
              className="rounded-xl border shadow"
            />
            <p className="text-sm text-gray-500 mt-2">Figure 3: SharePoint folder structure</p>
          </div>

          <p>Each invoice PDF is saved to the correct vendor folder using extracted metadata.</p>
        </CardContent>
      </Card>

      {/* Step 4 – PDF Download */}
      <Card className="mb-6">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">4. Sample PDF Output</h2>
          <p>Select a completed PDF to download (includes audit trail first/last page):</p>

          <select
            className="border px-3 py-2 rounded w-full md:w-1/2"
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.value)}
          >
            {pdfFiles.map((pdf, index) => (
              <option key={index} value={pdf.file}>
                {pdf.label}
              </option>
            ))}
          </select>

          <a href={`/${selectedFile}`} download>
            <Button className="flex items-center space-x-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2">
              <Download className="w-4 h-4 mr-2" />
              Download Selected PDF
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}

