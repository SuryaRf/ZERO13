<?php
namespace App\Http\Controllers;
use Inertia\Inertia;

class SolutionsController extends Controller
{
    public function index()
    {
        return Inertia::render('Solutions');
    }
}