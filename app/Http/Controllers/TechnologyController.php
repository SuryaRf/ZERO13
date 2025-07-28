<?php
namespace App\Http\Controllers;
use Inertia\Inertia;

class TechnologyController extends Controller
{
    public function index()
    {
        return Inertia::render('Technology');
    }
}