<?php
namespace App\Http\Controllers;
use Inertia\Inertia;

class InsightsController extends Controller
{
    public function index()
    {
        return Inertia::render('Insights');
    }
}