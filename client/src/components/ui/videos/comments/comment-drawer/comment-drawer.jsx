import DrawerWrapper from "../../../main/account/drawer/drawer-wrapper.jsx";
import CommentBox from "../comment-box/comment-box.jsx";
import React, {Fragment} from "react";

export default function CommentDrawer(props) {

    if (props.comment) {
        return (
            <DrawerWrapper content={
                <Fragment>
                    <CommentBox isComment={true} reply={true} id={props.comment} closeable={false} />
                </Fragment>
            } />
        );
    }
}