import * as vscode from 'vscode';

export class MyCommentController implements vscode.Disposable, vscode.CommentingRangeProvider {
    private readonly commentController: vscode.CommentController;
    private disposables: vscode.Disposable[] = [];

    constructor() {
        this.commentController = vscode.comments.createCommentController(
            'my-test-comment-controller',
            'My test comment controller'
        );
        this.commentController.commentingRangeProvider = this;
    }

    provideCommentingRanges(document: vscode.TextDocument): vscode.ProviderResult<vscode.Range[]> {
        console.log(document.uri);
        const {lineCount} = document;
        return [new vscode.Range(0, 0, lineCount - 1, 0)];
    }

    dispose() {
        this.disposables.forEach(item => item.dispose());
        this.disposables = [];
    }
}
