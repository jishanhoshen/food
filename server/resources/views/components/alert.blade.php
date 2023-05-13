<div class="absolute top-24 right-5 z-40">
    @if (is_array($message))
        @foreach ($message as $key => $item)
            @php
                if ($key == 'success') {
                    $color = 'green';
                }
                if ($key == 'warning') {
                    $color = 'yellow';
                }
                if ($key == 'danger') {
                    $color = 'red';
                }
                if ($key == 'info') {
                    $color = 'blue';
                }
            @endphp
            <div id="{{ 'alert-' . $key }}"
                class=" flex p-4 mb-4 border-t-4 {{ 'text-' . $color . '-800 border-' . $color . '-500 bg-' . $color . '-50 dark:text-' . $color . '-400 dark:border-' . $color . '-500' }}"
                {{-- class="  flex p-4 mb-4 border-t-4 text-green-800 border-green-500 bg-green-50 dark:text-green-400 dark:border-green-500" --}} 
                role="alert">
                <svg class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"></path>
                </svg>
                <div class="ml-3 text-sm font-medium pr-4">
                    {{ $item }}
                </div>
                <button type="button"
                    class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 bg-red-50 {{ 'text-' . $color . '-500 focus:ring-' . $color . '-400 hover:bg-' . $color . '-200 dark:text-' . $color . '-300' }} dark:hover:bg-gray-700 hover:text-white"
                    data-dismiss-target="#{{ 'alert-' . $key }}" aria-label="Close">
                    <span class="sr-only">Dismiss</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        @endforeach
    @endif
</div>
