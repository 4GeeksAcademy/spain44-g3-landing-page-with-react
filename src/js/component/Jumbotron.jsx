import React from "react";

export const Jumbotron = () => {
    return (
        <div class="container my-5 background-grey">
            <div class="position-relative p-5  text-muted bg-light border border-dashed rounded-5">
                <svg class="bi mt-5 mb-3" width="48" height="48"></svg>
                <h1 class="text-body-emphasis text-dark display-2 ">A Warm Welcome!</h1>
                <p class="col-lg-12 mb-4 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis est corporis officia mollitia repudiandae itaque similique quod facilis perspiciatis nobis dolore quidem nemo, ullam laborum quos iusto vitae blanditiis.
                </p>
                <button class="btn btn-primary px-3 mb-5" type="button">
                    Call to action!
                </button>
            </div>
        </div>
    );
}
