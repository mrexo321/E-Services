<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index()
    {
        $invoices = Invoice::query()
        ->select('order_code' , 'total_amount' , 'invoice_code')
        ->where('user_id' , auth()->user()->id)
        ->with('order:order_code,recipient,created_at,status');

        $invoicesUser = $invoices->latest()->get();

        return inertia('Invoice/InvoiceIndex' , compact('invoicesUser'));
    }
}
