<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\User;

class AdminController extends Controller
{
    public function addUser(Request $request)
    {
        $formFields = $request->validate([
            'name' => ['required', 'min:5'],
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'password' => 'required|min:6',
            'city' => '',
            'phone' => '',
            'address' => '',
            'rate' => '',
            'role' => 'required'
        ]);

        if ($formFields) {
            $formFields['password'] = bcrypt($formFields['password']);

            $user = User::create($formFields);

            return back()->with('message', 'A new uer Successfully created');
        }
    }

    public function getUsers()
    {
        $users = User::all();
        return response()->json(['users' => $users]);
    }
}
