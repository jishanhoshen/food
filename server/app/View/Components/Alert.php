<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\Contracts\View\View;

class Alert extends Component
{
    /**
     * The priority of the alert, i.e., "info", or "warning"
     *
     * @var string
     */
    public $level;

    /**
     * The message or an array of messages to present to the user
     *
     * @var mixed
     */
    public $message;

    // /**
    //  * The message or an array of messages to present to the user
    //  *
    //  * @var mixed
    //  */
    // public $color;

    /**
     * Create a new component instance.
     *
     * @param  string  $level
     * @param  mixed   $message
     */
    public function __construct(string $level = 'info', $message = [])
    {
        $this->level   = $level;
        $this->message = $message;

        // if ($level == 'success') {
        //     $this->color = "green";
        // } else if ($level == 'warning') {
        //     $this->color = "yellow";
        // } else if ($level == 'danger') {
        //     $this->color = "red";
        // } else {
        //     $this->color = "blue";
        // }
    }
    /**
     * Get the view / contents that represent the component.
     *
     * @return View
     */
    public function render()
    {
        return view('components.alert');
    }
}
