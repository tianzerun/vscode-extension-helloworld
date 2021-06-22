import * as vscode from 'vscode';
import {MyCommentController} from './MyCommentController';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('test.showDiffEditor', () => {
		if (!vscode.workspace.workspaceFolders?.length) {
			vscode.window.showErrorMessage(`Please add any folder (could be empty) to the workspace.
			Within it, you need to add two files: old.txt and new.txt (named exactly like these) with different contents`);
			return;
		}
		const workspacePath = vscode.workspace.workspaceFolders[0].uri;
		const aQuery = JSON.stringify({'meth': 'old'});
		const bQuery = JSON.stringify({'meth': 'new'});
		const aUri = vscode.Uri.file(vscode.Uri.joinPath(workspacePath, 'old.txt').fsPath).with({query: aQuery});
		const bUri = vscode.Uri.file(vscode.Uri.joinPath(workspacePath, 'new.txt').fsPath).with({query: bQuery});
		vscode.commands.executeCommand(
			'vscode.diff',
			aUri,
			bUri,
			`file diff`,
			{}
		);
	});

	const commentController = new MyCommentController();

	context.subscriptions.push(disposable, commentController);
}

export function deactivate() {}
