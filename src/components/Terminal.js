import React from 'react';

const body = <script>var editor = ace.edit("editor");
    editor.setTheme("ace/theme/dracula");
    editor.session.setMode("ace/mode/javascript");
    </script>;

function Terminal() {
    return (
        <div>
            <h1>TERMINAL</h1>
            {body}
        </div>
    )
}

export default Terminal